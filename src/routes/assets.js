const express = require("express");
const app = express.Router();

const icons = (icon) => {
  if (icon === "magnifyingGlass") {
    return `<div id="magnifyingGlass"><svg
      class="standard-icon"
      fill="currentColor"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      style="vertical-align: middle"
      viewBox="0 0 40 40"
      width="1em"
    ><g>
      <path d="m27.2 18.6q0-4.2-2.9-7.1t-7.1-2.9-7 2.9-3 7.1 2.9 7 7.1 3 7.1-3 2.9-7z m11.4 18.5q0 1.2-0.8 2.1t-2 0.8q-1.2 0-2-0.8l-7.7-7.7q-4 2.8-8.9 2.8-3.2 0-6.1-1.3t-5-3.3-3.4-5-1.2-6.1 1.2-6.1 3.4-5.1 5-3.3 6.1-1.2 6.1 1.2 5 3.3 3.4 5.1 1.2 6.1q0 4.9-2.7 8.9l7.6 7.6q0.8 0.9 0.8 2z" />
    </g></svg></div>`;
  } else if (icon === "menu") {
    return `<span id="sectionsButton">
      <svg
        class="standard-icon"
        fill="currentColor"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        style="vertical-align: middle"
        viewBox="0 0 40 40"
        width="1em"><g>
      <path d="m37.3 30v2.9q0 0.5-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.6 0.4-1t1-0.4h31.5q0.5 0 1 0.4t0.4 1z m0-11.4v2.8q0 0.6-0.4 1t-1 0.5h-31.5q-0.6 0-1-0.5t-0.4-1v-2.8q0-0.6 0.4-1t1-0.5h31.5q0.5 0 1 0.5t0.4 1z m0-11.5v2.9q0 0.6-0.4 1t-1 0.4h-31.5q-0.6 0-1-0.4t-0.4-1v-2.9q0-0.5 0.4-1t1-0.4h31.5q0.5 0 1 0.4t0.4 1z" />
    </g></svg><span>`;
  } else if (icon === "bell") {
    return `<svg
        id="bellIcon"
        class="standard-icon"
        fill="currentColor"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        style="vertical-align: middle"
        viewBox="0 0 40 40"
        width="1em"><g>
      <path d="m20.4 37.9q0-0.4-0.4-0.4-1.3 0-2.3-1t-0.9-2.2q0-0.4-0.4-0.4t-0.3 0.4q0 1.6 1.1 2.8t2.8 1.1q0.4 0 0.4-0.3z m-14.9-6.5h29q-5.9-6.7-5.9-18.5 0-1.2-0.6-2.4t-1.5-2.3-2.7-1.8-3.8-0.7-3.8 0.7-2.7 1.8-1.5 2.3-0.6 2.4q0 11.8-5.9 18.5z m33.1 0q0 1.2-0.9 2t-2 0.9h-10q0 2.4-1.7 4t-4 1.7-4-1.7-1.7-4h-10q-1.2 0-2-0.9t-0.9-2q1.1-0.9 2.1-1.9t1.9-2.7 1.6-3.5 1.1-4.6 0.5-5.8q0-3.4 2.6-6.3t6.8-3.6q-0.1-0.4-0.1-0.9 0-0.8 0.6-1.5t1.5-0.6 1.5 0.6 0.6 1.5q0 0.5-0.1 0.9 4.2 0.6 6.8 3.6t2.6 6.3q0 3.1 0.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z" />
    </g></svg>`;
  } else if (icon === "rightArrow") {
    return `<svg
    fill="currentColor"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    style="
      vertical-align: middle;
      font-size: 1.5em;
      transform: rotate(135deg);
    "
    viewBox="0 0 40 40"
    width="1em"
  ><g>
    <path d="m26.3 21.4q0 0.3-0.2 0.5l-10.4 10.4q-0.3 0.3-0.6 0.3t-0.5-0.3l-1.1-1.1q-0.2-0.2-0.2-0.5t0.2-0.5l8.8-8.8-8.8-8.7q-0.2-0.3-0.2-0.6t0.2-0.5l1.1-1.1q0.3-0.2 0.5-0.2t0.6 0.2l10.4 10.4q0.2 0.2 0.2 0.5z"/>
  </g></svg>`;
  }
};

app.route("/icon/:iconId").post(async (req, res) => {
  const topicId = req.params.iconId;
  return res.send(icons(topicId));
});

module.exports = app;
