const { 
  getAllSymbols,
} = require('../../models/binance.models');


function httpGetAllMarkets(req, res) {
  return res.status(200).json(getAllSymbols());
}


module.exports = {
  httpGetAllMarkets,
};

