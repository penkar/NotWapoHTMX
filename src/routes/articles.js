const express = require("express");
const app = express.Router();

const { stories } = require("../assets/stories.js");

function IndividualStory(story) {
  return `<div class="home-page-body" id="app-body" hx-swap-oob="true">
    <div class="story-teaser-component main-article-component">${Story(
      story
    )}</div></div>`;
}

function Story(story) {
  let storyHtml = `<a class="title" hx-push-url="true" hx-swap="none" hx-post="/article/${story.id}">${story.title}</a>`;
  storyHtml += `<p class="author">By: ${story.author.join(", ")}</p>`;
  story.story.map(({ text }) => {
    storyHtml += `<p class="title-story-element">${text}</p>`;
  });
  return `<div class="story-teaser-component">${storyHtml}</div>`;
}

function StoriesList(stories) {
  let col1 = "",
    col2 = "",
    col3 = "";

  stories.forEach((story, index) => {
    if (index % 3 === 0) {
      col1 += Story(story);
    } else if (index % 3 === 1) {
      col2 += Story(story);
    } else {
      col3 += Story(story);
    }
  });

  return `<div class="home-page-body" id="app-body" hx-swap-oob="true">
      <div class="home-page-body-col">${col1}</div>
      <div class="home-page-body-col">${col2}</div>
      <div class="home-page-body-col">${col3}</div>
    </div>`;
}

const headerDateString = () =>
  `<div class="slogan-row-text-col left" id="header-datestring" hx-swap-oob="true">${new Date().toDateString()}</div>`;

app.route("/topic/:topicId").post(async (req, res) => {
  const topicId = req.params.topicId;
  const filteredStories = stories.filter(
    (story) => story.section === topicId || story.subSection === topicId
  );
  return res.send(`${StoriesList(filteredStories)}${headerDateString()}`);
});

app.route("/article/:articleId").post(async (req, res) => {
  const articleId = req.params.articleId;
  const story = stories.find((story) => story.id === articleId);
  return res.send(`${IndividualStory(story)}${headerDateString()}`);
});

app.route("/").post(async (req, res) => {
  return res.send(`${StoriesList(stories)}${headerDateString()}`);
});

app.route("/index").post(async (req, res) => {
  return res.send(`${StoriesList(stories)}${headerDateString()}`);
});

module.exports = app;
