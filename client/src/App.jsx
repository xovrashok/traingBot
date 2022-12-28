import { useState, Suspense, useMemo } from 'react';

import useSymbols from './hooks/useSymbols';

import Select from 'react-select';
import './App.css';
import { Positions } from "./components/Positions/Positions";
import useCreateOrder from "./hooks/useCreateLongOrder";

const App = () => {
  const [ selection, setSelection ] = useState("");
  const [ type, setType ] = useState("market");
  const [ amount, setAmount ] = useState("1000");

  //Работает на каждый рендер
  const symbols = useSymbols();
  const createOrder = useCreateOrder();
  const showedAmount = useMemo(() => amount / 1000 + '.000$', [amount])
  console.log(createOrder, 'createOrder')
  //Работает на каждый рендер

  return (
    <div className="App">
      <h1 className='app-title'> MENU </h1>

      <div className='contenitore'>

        <div className='blocco'>
          <div className='selection' id="symbol" name="symbol" > { selection.label || 'symbol' } </div>
          <div className='basic'>
          <Select
            className="basic-single"
            classNamePrefix="select"
            onChange={setSelection}
            options={symbols.data}
            name="color"
            isSearchable="true"
          />
          </div>
        </div>

        <div className='blocco'>
          <div className='selection'> { type } </div>
          <div className='option-type'>
            <button 
              className='button-opt'
              onClick={() => setType("market") }
            >market</button>
            <button 
              className='button-opt'
              onClick={() => setType("limit") }
            >limit</button>
          </div>
        </div>

        <div className='blocco'>
          <div className='selection'> { showedAmount || 'amount' } </div>

          <div className='option-amount'>
            <button 
              className='button-opt'
              onClick={() => setAmount(20000) }
            >20000</button>
            <button 
              className='button-opt'
              onClick={() => setAmount(1000) }
            >1000</button>
          </div>
          <div className='option-amount'>
            <button 
              className='button-opt'
              onClick={() => setAmount(50000) }
            >50000</button>
            <button 
              className='button-opt'
              onClick={() => setAmount(75000) }
            >75000</button>
          </div>
          
        </div>
        
        <div className='blocco'>
          <div className='selection'>params</div>
        </div>


      </div>
      <div className='buttons'>
        <button 
          className='long'
          onClick={async () => {
            try {
              const result = await createOrder.trigger({ symbol: selection.label, type, side: 'buy', amount })
              console.log(result, 'buy result')
            } catch (e) {
              console.log(e, 'ERROR')
            }
          }}
        >Long</button>
        <button 
          className='short'
          onClick={async () => {
            try {
              const result = await createOrder.trigger({ symbol: selection.label, type, side: 'sell', amount })
              console.log(result, 'sell result')
            } catch (e) {
              console.log(e, 'ERROR')
            }
          }}
        >Short</button>
      </div>
        <Suspense fallback={<div>загрузка...</div>}>
            <Positions type={type}/>
        </Suspense>
    </div>
  );
};


export default App;



