const Sequelize = require("sequelize");
const express = require("express");
const wikiRouter = express.Router();
const { db, Page } = require("../models");
const addPage = require("../views/addPage.js");

// wiki/
wikiRouter.get("/", async (req, res) => {
  // retrieve all wiki pages
  const pages = await Page.findAll();
  res.send(pages);
});
// wiki/
wikiRouter.post("/", async (req, res) => {
  // submit a new page to db
  const post = await Page.create({
    title: "thetitle",
    content: "sometext",
    slug: "aSlug",
    status: "open",
  });
  res.send(`you made a post like this: ${post.title} is the title`);
});

wikiRouter.get("/add", async (req, res) => {
  // retrieve the 'add a page form'
  res.send("hellopage");
});

module.exports = wikiRouter;
