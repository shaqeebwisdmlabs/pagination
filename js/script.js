let articlesData = [
  {
    id: 1,
    title: "Article title 1 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 2,
    title: "Article title 2 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 3,
    title: "Article title 3 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 4,
    title: "Article title 4 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 5,
    title: "Article title 5 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 6,
    title: "Article title 6 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 7,
    title: "Article title 7 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 7 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 8,
    title: "Article title 8 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 8 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 9,
    title: "Article title 9 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 9 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 10,
    title: "Article title 10 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 11,
    title: "Article title 11 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 11 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
  {
    id: 12,
    title: "Article title 12 lorem, ipsum dolor sit amet consectetur.",
    content:
      "Content of Article 12 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odio repellendus laudantium delectus vero dolore perspiciatis totam doloribu sea",
  },
];

const articles = document.querySelector(".articles");
const pagination = document.querySelector(".pagination");
const searchInput = document.querySelector("#search");

let currentPage = 1;
const articlesPerPage = 4;

const displayArticles = (page) => {
  articles.innerHTML = "";

  const startIdx = (page - 1) * articlesPerPage;
  const endIdx = startIdx + articlesPerPage;

  const articlesToDisplay = articlesData.slice(startIdx, endIdx);

  articlesToDisplay.forEach((article) => {
    const articleElement = document.createElement("article");
    articleElement.classList.add("blog-article");
    articleElement.innerHTML = `
    <h3 class="fw-bold fs-title-sm">
      ${article.title}
    </h3>
    <p class="fs-body-sm">
      ${article.content}
    </p>
    `;

    articles.appendChild(articleElement);
  });
};

const displayPagination = () => {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(articlesData.length / articlesPerPage);

  for (let index = 1; index <= totalPages; index++) {
    const page = document.createElement("a");
    page.href = "#";
    page.innerHTML = index;
    page.onclick = function () {
      currPage = parseInt(this.innerHTML);
      displayArticles(currPage);
      return false;
    };

    pagination.appendChild(page);
  }
};

const searchArticles = () => {
  const searchTerm = searchInput.value.toLowerCase();

  console.log(searchTerm);

  const searchResults = articlesData.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchTerm) ||
      article.content.toLowerCase().includes(searchTerm)
    );
  });

  articlesData = searchResults;
  currentPage = 1;
  displayArticles(currentPage);
  displayPagination();
};

displayArticles(currentPage);
displayPagination();
