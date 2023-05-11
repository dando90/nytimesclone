const apiURIs = {
  allSections: () =>
    `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  sectionArticles: (section) =>
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  searchArticles: (query) =>
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  dayArticles: (data) =>
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=pub_date:("${data}")&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
};

//impostare tutte le funzioni con useCallBack(fn,[])

const homeSections = [
  {
    name: "World",
    slug: "section/world",
  },
  {
    name: "U.S.",
    slug: "section/us",
  },
  {
    name: "Politics",
    slug: "section/politics",
  },
  {
    name: "N.Y.",
    slug: "section/nyregion",
  },
  {
    name: "Business",
    slug: "section/business",
  },
  {
    name: "Opinion",
    slug: "section/opinion",
  },
  {
    name: "Science",
    slug: "section/science",
  },
  {
    name: "Health",
    slug: "section/health",
  },
  {
    name: "Sports",
    slug: "section/sports",
  },
  {
    name: "Arts",
    slug: "section/arts",
  },
  {
    name: "Books",
    slug: "section/books",
  },
  {
    name: "Style",
    slug: "section/style",
  },
  {
    name: "Food",
    slug: "section/food",
  },
  {
    name: "Travel",
    slug: "section/travel",
  },
  {
    name: "Magazine",
    slug: "section/magazine",
  },
  {
    name: "Real Estate",
    slug: "section/realestate",
  },
];

const allSections = [
  {
    name: "Homepage News",
    slug: "section/home",
  },
  {
    name: "Today's Paper",
    slug: "section/todayspaper",
  },
  {
    name: "Arts",
    slug: "section/arts",
  },
  {
    name: "Arts",
    slug: "section/arts",
  },
  {
    name: "Automobiles",
    slug: "section/automobiles",
  },
  {
    name: "Books",
    slug: "section/books",
  },
  {
    name: "Business",
    slug: "section/business",
  },
  {
    name: "Fashion",
    slug: "section/fashion",
  },
  {
    name: "Food",
    slug: "section/food",
  },
  {
    name: "Health",
    slug: "section/health",
  },
  {
    name: "Insider",
    slug: "section/insider",
  },
  {
    name: "Magazine",
    slug: "section/magazine",
  },
  {
    name: "Movies",
    slug: "section/movies",
  },
  {
    name: "New York News",
    slug: "section/nyregion",
  },
  {
    name: "Obituaries",
    slug: "section/obituaries",
  },
  {
    name: "Opinion",
    slug: "section/opinion",
  },
  {
    name: "Politics",
    slug: "section/politics",
  },
  {
    name: "Real Estate",
    slug: "section/realestate",
  },
  {
    name: "Science",
    slug: "section/science",
  },
  {
    name: "Sport",
    slug: "section/sports",
  },
  {
    name: "Style",
    slug: "section/style",
  },
  {
    name: "Sunday Review",
    slug: "section/sundayreview",
  },
  {
    name: "Technology",
    slug: "section/technology",
  },
  {
    name: "Theater",
    slug: "section/theater",
  },
  {
    name: "T-Magazine",
    slug: "section/t-magazine",
  },
  {
    name: "Travel",
    slug: "section/travel",
  },
  {
    name: "Upshot",
    slug: "section/upshot",
  },
  {
    name: "US News",
    slug: "section/us",
  },
  {
    name: "World News",
    slug: "section/world",
  },
];

export { apiURIs, homeSections, allSections };
