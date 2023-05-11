import React from "react";
import "../assets/css/Article.css";
import defaultArticleImage from "../assets/img/NoImage.svg";

function Article(props) {
  const {
    id,
    abstract,
    author,
    date,
    image,
    title,
    url: articleUrl,
  } = props.article;
  const { caption, copyright, show: showImage, url: imgUrl } = image;

  let formattedDate = new Date(date);
  formattedDate = `${
    formattedDate.getMonth() + 1
  }-${formattedDate.getDate()}-${formattedDate.getFullYear()}, ${formattedDate.getHours()}:${(
    "0" + formattedDate.getMinutes()
  ).slice(-2)}`;

  return (
    <article
      className={
        showImage ? "article-container withImage" : "article-container"
      }
    >
      <div className="article-text-container">
        <p>{formattedDate}</p>
        <h2 className="article-title">
          <a href={articleUrl || "#"} target="_blank">
            {title || "{Title not available}"}
          </a>
        </h2>
        <h5 className="article-by">{author || "Author not available"}</h5>
        <p className="article-abstract">
          {abstract || "Article description not available"}
        </p>
      </div>

      {showImage && (
        <div className="article-img-container">
          <figure>
            <img
              className="article-img"
              src={imgUrl || defaultArticleImage}
              alt={caption}
            />
            <figcaption className="article-caption">{caption}</figcaption>
          </figure>

          <p>© {copyright || "Copyright info not available"}</p>
        </div>
      )}
    </article>
  );
}

export default Article;
