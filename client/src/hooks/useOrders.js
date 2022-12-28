import { httpCreateOrder } from "./requests";
// import usePositions from "./usePositions";


function useOrder(params) {
  // const { getPositions } = usePositions();

  const createLongOrder = async (e) => {
    e.preventDefault();

    const { symbol, type, amount} = params;
    console.log(symbol, type, amount);
    const side = 'buy';

    await httpCreateOrder({ symbol, type, side, amount });
    // await getPositions();
  }

  const createShortOrder = async (e) => {
    e.preventDefault();

    const { symbol, type, amount} = params;
    console.log(symbol, type, amount);
    const side = 'sell';

    await httpCreateOrder({ symbol, type, side, amount });
  }


  return {
    createLongOrder,
    createShortOrder,
  };
}


export default useOrder;

