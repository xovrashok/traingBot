import { useState, useEffect, useMemo } from 'react';
import useSWR, { SWRConfig } from 'swr';

import usePositions from './hooks/usePositions';
import useOrder from './hooks/useOrders';

import config from './config';
import './App.css';
import Symbols from './components/Symbols';
const App = () => {
  const [selection, setSelection] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('1000');
  const [selectedParams, setSelectedParams] = useState({});

  const { positions, closePosition } = usePositions();
  const { createLongOrder, createShortOrder } = useOrder(selectedParams);

  const showedAmount = useMemo(() => amount / 1000 + '.000$', [amount]);

  useEffect(() => {
    const selectedParams = {
      symbol: selection.label,
      type: type,
      amount: amount,
    };
    setSelectedParams(selectedParams);
    console.log(selectedParams);
  }, [amount, selection, type]);

  return (
    <SWRConfig value={config.swr}>
      <div className="App">
        <h1 className="app-title"> MENU </h1>

        <div className="contenitore">
          <div className="blocco">
            <div className="selection" id="symbol" name="symbol">
              {' '}
              {selection.label || 'symbol'}{' '}
            </div>
            <div className="basic">
              <Symbols onChange={setSelection} />
            </div>
          </div>

          <div className="blocco">
            <div className="selection"> {type || 'type'} </div>
            <div className="option-type">
              <button className="button-opt" onClick={() => setType('market')}>
                market
              </button>
              <button className="button-opt" onClick={() => setType('limit')}>
                limit
              </button>
            </div>
          </div>

          <div className="blocco">
            <div className="selection"> {showedAmount || 'amount'} </div>

            <div className="option-amount">
              <button className="button-opt" onClick={() => setAmount(20000)}>
                20000
              </button>
              <button className="button-opt" onClick={() => setAmount(1000)}>
                1000
              </button>
            </div>
            <div className="option-amount">
              <button className="button-opt" onClick={() => setAmount(50000)}>
                50000
              </button>
              <button className="button-opt" onClick={() => setAmount(75000)}>
                75000
              </button>
            </div>
          </div>

          <div className="blocco">
            <div className="selection"> params </div>
          </div>
        </div>

        <div className="buttons">
          <button className="long" onClick={createLongOrder}>
            Long
          </button>
          <button className="short" onClick={createShortOrder}>
            Short
          </button>
        </div>

        <div className="ordini">
          <p>POSITION </p>
          <button className="close-button" onClick={closePosition}>
            X
          </button>
        </div>
      </div>
    </SWRConfig>
  );
};

export default App;
