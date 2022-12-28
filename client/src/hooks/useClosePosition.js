import { usePostRequest } from './requests';

const useClosePosition = () => {
    const { trigger, data, error, isMutating, reset } = usePostRequest('/position')

    const closePosition = ( symbol, side, contracts ) => {
        const type = 'market';
        const sideClose = side === 'long' ? 'sell': 'buy';

        trigger({
            symbol,
            side,
            contracts,
            type,
            sideClose,
        });
    };

    return {
        data,
        error,
        trigger,
        closePosition
    };
};

export default useClosePosition;