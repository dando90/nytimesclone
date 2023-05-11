import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import Article from "../components/Article";
import { convertSectionArticle } from "../utils/convertArticles";
import useAxios from "../useAxios";
import { apiURIs } from "../config";

function Home() {
  const value = useGlobalContext();

  /* const sectionList = value.state.sections.map((section, index) => {
    return <li key={index}>{section}</li>;
  }); */
  const { isLoading, error, data } = useAxios(apiURIs.sectionArticles("home"));

  useEffect(() => {
    document.title = `The New York Times`;
  }, []);

  useEffect(() => {
    if (data) {
      const filteredArticles = data.results.filter(
        (article) => article.item_type === "Article"
      );
      const newArticles = filteredArticles.map((article, index) =>
        convertSectionArticle(article, index)
      );
      value.updateArticles(newArticles);
    }
  }, [data]);

  //aggiungere cleanup function per bloccare eventualmente fetch dei dati (fatto in useAxios)
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>There was an error: {error.message}</h2>;
  }

  const articlesList = value.state.articles.map((article) => {
    //cambiare index con id vero
    return <Article key={article.id} article={{ ...article }} />;
  });

  return (
    <>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ width: "100%" }}>HomePage</h1>
        {articlesList}
      </section>
    </>
  );
}

export default Home;
