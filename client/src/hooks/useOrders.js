import { usePostRequest } from './requests';
import { ORDER_SIDE } from '../constants';

function useOrders() {
  const { data, error, trigger, reset, isMutating } = usePostRequest('/orders');

  const createLongOrder = async (symbol, type, amount) => {
    return await trigger({
      type,
      amount,
      symbol: symbol.label,
      side: ORDER_SIDE.BUY,
    });
  };

  const createShortOrder = async (symbol, type, amount) => {
    return await trigger({
      type,
      amount,
      symbol: symbol.label,
      side: ORDER_SIDE.SELL,
    });
  };

  return {
    createLongOrder,
    createShortOrder,
    data,
    error,
    isMutating,
    reset,
    trigger,
  };
}

export default useOrders;
