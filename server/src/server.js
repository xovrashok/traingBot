const http = require('http');
const app = require('./app');

const { loadMarkets } = require('./models/binance.models');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadMarkets();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();