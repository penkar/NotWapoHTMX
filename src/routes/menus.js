const express = require("express");
const app = express.Router();

const menus = (menuType) => {
  const headerItems = [
    { id: "politics", name: "Politics" },
    { id: "opinions", name: "Opinions" },
    { id: "sports", name: "Sports" },
    { id: "local", name: "Local" },
    { id: "national", name: "National" },
    { id: "world", name: "World" },
    { id: "business", name: "Business" },
    { id: "tech", name: "Tech" },
    { id: "lifestyle", name: "Lifestyle" },
  ];

  if (menuType === "header") {
    return `<div id="header-row">
      <ul class="news-link-ul">
        <div class="news-button">
          <div
            hx-post="/icon/magnifyingGlass"
            hx-trigger="load"
            id="magnifyingGlass"
          ></div>
        </div>
        <div class="news-button" id="section-button">
          <span>Sections&nbsp;</span>
          <span
            id="sectionsButton"
            hx-post="/icon/menu"
            hx-trigger="load"
          ></span>
        </div>
        ${headerItems
          .map(
            ({ id, name }) =>
              `<li class="news-link-li">
            <a hx-push-url="true" hx-swap="none" hx-post="/topic/${id}">
              ${name}
            </a>
          </li>`
          )
          .join("")}
      </ul>
      <ul class="news-link-ul">
        <li class="news-link-li">
          <a href="">
            <span id="bellIcon" hx-post="/icon/bell" hx-trigger="load" />
          </a>
        </li>
      </ul>
      <script type="text/javascript">
      document
      .getElementById("section-button")
      .addEventListener("click", function () {
        document.getElementById("TableOfContents").classList.toggle("open");
        document
          .querySelector(".app-body")
          .classList.toggle("tableofcontents");
      });
      </script>
    </div>`;
  }
};

app.route("/menu/:menuKind").post(async (req, res) => {
  const topicId = req.params.menuKind;
  return res.send(menus(topicId));
});

module.exports = app;
