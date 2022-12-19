const express = require('express');

const { 
  httpGetPosition,
  httpClosePosition
} = require('./position.controller');

const positionRouter = express.Router();


positionRouter.get('/', httpGetPosition);
positionRouter.post('/', httpClosePosition);


module.exports = positionRouter;


