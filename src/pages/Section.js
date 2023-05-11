import React from "react";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  convertSectionArticle,
  convertSearchArticle,
} from "../utils/convertArticles";
import useAxios from "../useAxios";
import { allSections, apiURIs } from "../config";
import Article from "../components/Article";

function Section() {
  const value = useGlobalContext();

  const routeParams = useParams();

  const newSection = useMemo(() => {
    return (
      allSections.find(
        (item) => item.slug === `section/${routeParams.sectionName}`
      )?.name || "Section not found"
    );
  }, [routeParams.sectionName]);
  let formattedData = null;
  if (routeParams.sectionName === "todayspaper") {
    const date = new Date();
    formattedData = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
  }
  const { isLoading, error, data } = useAxios(
    formattedData
      ? apiURIs.dayArticles(formattedData)
      : apiURIs.sectionArticles(routeParams.sectionName)
  );

  useEffect(() => {
    document.title = `${newSection} - The New York Times`;
  }, [newSection]);

  useEffect(() => {
    if (formattedData) {
      if (data) {
        const filteredArticles = data.response.docs.filter(
          (article) => article.document_type === "article"
        );
        const newArticles = filteredArticles.map((article, index) =>
          convertSearchArticle(article, index)
        );
        value.updateArticles(newArticles);
      }
    } else {
      if (data?.results != null) {
        const filteredArticles = data.results.filter(
          (article) => article.item_type === "Article"
        );
        const newArticles = filteredArticles.map((article, index) =>
          formattedData
            ? convertSearchArticle(article, index)
            : convertSectionArticle(article, index)
        );
        value.updateArticles(newArticles);
      }
    }
  }, [data]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>There was an error: {error.message}</h2>;
  }

  const articlesList = value.state.articles.map((article) => {
    return <Article key={article.id} article={{ ...article }} />;
  });

  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ width: "100%" }}>{newSection}</h1>
      {articlesList}
    </section>
  );
}

export default Section;
