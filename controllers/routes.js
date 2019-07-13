// set up the controller for the app, including routes

var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");
