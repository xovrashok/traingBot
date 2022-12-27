import { useState, useEffect, useMemo } from "react";

import usePositions from "./hooks/usePositions";
import useSymbols from "./hooks/useSymbols";
import useOrder from "./hooks/useOrders";

import Select from "react-select";
import "./App.css";

const App = () => {
  const [selection, setSelection] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [showedAmount, setShowedAount] = useState("");
  const [selectedParams, setSelectedParams] = useState({});

  const symbols = useSymbols();
  const { positions, closePosition } = usePositions();
  const { createLongOrder, createShortOrder } = useOrder(selectedParams);

  useMemo(() => {
    const showedAmount1 = amount / 1000 + ".000$";
    if (showedAmount1 !== "0.000$") {
      setShowedAount(showedAmount1);
    }
  }, [amount]);

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
    <div className="App">
      <h1 className="app-title"> MENU </h1>

      <div className="contenitore">
        <div className="blocco">
          <div className="selection" id="symbol" name="symbol">
            {" "}
            {selection.label || "symbol"}{" "}
          </div>
          <div className="basic">
            <Select
              className="basic-single"
              classNamePrefix="select"
              onChange={setSelection}
              options={symbols}
              name="color"
              isSearchable="true"
            />
          </div>
        </div>

        <div className="blocco">
          <div className="selection"> {type || "type"} </div>
          <div className="option-type">
            <button className="button-opt" onClick={() => setType("market")}>
              market
            </button>
            <button className="button-opt" onClick={() => setType("limit")}>
              limit
            </button>
          </div>
        </div>

        <div className="blocco">
          <div className="selection"> {showedAmount || "amount"} </div>

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
  );
};

export default App;
