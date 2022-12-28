import { useCallback, useEffect, useState } from 'react';
import { httpGetSymbols } from './requests';

function useSymbols() {
  const [symbols, setSymbols] = useState([]);

  const getSymbols = useCallback(async () => {
    const fetchedSymbols = await httpGetSymbols();
    setSymbols(fetchedSymbols);
  }, []);

  useEffect(() => {
    getSymbols();
  }, [getSymbols]);

  return symbols;
}

export default useSymbols;
