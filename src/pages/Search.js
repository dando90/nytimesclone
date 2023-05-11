import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { convertSearchArticle } from "../utils/convertArticles";
import useAxios from "../useAxios";
import { apiURIs } from "../config";

import SearchForm from "../components/SearchForm";
import Article from "../components/Article";

function Search() {
  const value = useGlobalContext();

  const [searchParams] = useSearchParams();

  const { isLoading, error, data } = useAxios(
    apiURIs.searchArticles(searchParams.get("query"))
  );

  const [sortedArticles, setSortedArticles] = useState(value.state.articles);

  const sortArticlesBy = (sortType) => {
    switch (sortType) {
      case "relevance":
        setSortedArticles(value.state.articles);
        break;
      case "newest":
        let articlesNewest = [...value.state.articles]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((article, index) => {
            const showImage = index % 4 === 0 ? true : false;
            return { ...article, image: { ...article.image, show: showImage } };
          });
        setSortedArticles(articlesNewest);
        break;
      case "oldest":
        let articlesOldest = [...value.state.articles]
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((article, index) => {
            const showImage = index % 4 === 0 ? true : false;
            return { ...article, image: { ...article.image, show: showImage } };
          });
        setSortedArticles(articlesOldest);
        break;
      default:
        setSortedArticles(value.state.articles);
    }
  };

  useEffect(() => {
    document.title = `Search Page - The New York Times`;
    if (value.state.isSearchOpen) value.searchToggle();
  }, []);

  useEffect(() => {
    if (data) {
      const filteredArticles = data.response.docs.filter(
        (article) => article.document_type === "article"
      );
      const newArticles = filteredArticles.map((article, index) =>
        convertSearchArticle(article, index)
      );
      value.updateArticles(newArticles);
      setSortedArticles(newArticles);
    }
  }, [data]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>There was an error...</h2>;
  }

  const articlesList = sortedArticles.map((article) => {
    return <Article key={article.id} article={{ ...article }} />;
  });

  return (
    <section>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Search:</h1>
        <SearchForm />
        <div>
          <label htmlFor="sortby">Sort by </label>
          <select
            name="sortby"
            defaultValue={"relevance"}
            onChange={(e) => sortArticlesBy(e.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </header>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {articlesList}
      </section>
    </section>
  );
}

export default Search;
