export const convertSectionArticle = (article, index) => {
  const { uri, title, byline, created_date, url, abstract, multimedia } =
    article;
  const newArticle = {
    id: uri,
    title: title || "{Title not available}",
    author: byline || "Author not available",
    date: created_date,
    url: url || "#",
    abstract: abstract || "Article description not available",
    image: {
      url: multimedia?.[1]?.url,
      caption: multimedia?.[1]?.caption,
      copyright: multimedia?.[1]?.copyright || "Copyright info not available",
      show: index % 4 === 0 ? true : false,
    },
  };
  return newArticle;
};

export const convertSearchArticle = (article, index) => {
  const { _id, headline, byline, pub_date, web_url, abstract, multimedia } =
    article;
  const newArticle = {
    id: _id,
    title: headline.main || "{Title not available}",
    author: byline?.original || "Author not available",
    date: pub_date,
    url: web_url || "#",
    abstract: abstract || "Article description not available",
    image: {
      url: multimedia?.[1]?.url
        ? `https://www.nytimes.com/${multimedia[1].url}`
        : null,
      caption: multimedia?.caption,
      copyright: "Copyright info not available",
      show: index % 4 === 0 ? true : false,
    },
  };
  return newArticle;
};
