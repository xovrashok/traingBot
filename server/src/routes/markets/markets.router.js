const express = require('express');

const { 
  httpGetAllMarkets,
} = require('./markets.controller');

const marketsRouter = express.Router();


marketsRouter.get('/', httpGetAllMarkets);

module.exports = marketsRouter;

