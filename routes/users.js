const Sequelize = require("sequelize");
const express = require("express");
const userRouter = express.Router();
const { db } = require("../models");

module.exports = userRouter;
