const { 
  createNewOrder,
} = require('../../models/binance.models');



async function httpCreateNewOrder(req, res) {
  const orderParams = req.body;

  if (!orderParams.symbol || !orderParams.type || !orderParams.side || !orderParams.amount) {
    return res.status(400).json({
      error: 'Missing required order property',
    });
  }

  return res.status(201).json(await createNewOrder(orderParams));
}




module.exports = {
  httpCreateNewOrder,
};
