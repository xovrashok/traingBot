import { useState, useEffect, useMemo } from 'react';
import useSWR, { SWRConfig } from 'swr';

import usePositions from './hooks/usePositions';
import useOrder from './hooks/useOrders';

import config from './config';
import './App.css';
import Symbols from './components/Symbols';
import OrderType from './components/OrderType';
import Amount from './components/Amount';
import OrderParams from './components/OrderParams';
import Positions from './components/Positions';
import useOrders from './hooks/useOrders';
import CreateOrder from './components/CreateOrder';

const App = () => {
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  // market or limit
  const [orderType, setOrderType] = useState(null);
  // order amount
  const [amount, setAmount] = useState(config.defaultAmount);
  // idk what's this at the moment
  // const [selectedParams, setSelectedParams] = useState({});

  // const { positions, closePosition } = usePositions();

  return (
    <SWRConfig value={config.swr}>
      <div className="App">
        <h1 className="app-title"> MENU </h1>

        <div className="contenitore">
          <Symbols onChange={setSelectedSymbol} selectedSymbol={selectedSymbol} />
          <OrderType type={orderType} onChange={setOrderType} />
          <Amount amount={amount} onChange={setAmount} />
          <OrderParams />
        </div>

        <CreateOrder selectedSymbol={selectedSymbol} orderType={orderType} amount={amount} />

        <Positions />
      </div>
    </SWRConfig>
  );
};

export default App;
