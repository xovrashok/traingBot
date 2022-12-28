import useGetPositions from "../../hooks/useGetPositions";
import useClosePositions from "../../hooks/useClosePosition";

export const Positions = ({type}) => {
    const { data } = useGetPositions();
    const closePosition = useClosePositions()

    return ( <div className='list-wrapper'>
        {data.map((position) => {
        return (
        <div key={position.symbol} className='ordini'>
        <p>Symbol: {position.symbol}</p>
        <p>Contract size: {position.contractSize}</p>
        <p>Entry price: {position.entryPrice}</p>
        <p>Entry contracts: {position.contracts}</p>
        <button
        className='close-button'
        onClick={async () => {
            try {
                console.log(type, 'type')
                console.log(position, 'Position')
                const { symbol, side, contracts, info: { updateTime } } = position;
                let sideClose = (side === 'long') ? 'sell' : 'buy';
                const result = await closePosition.trigger({ symbol, type, sideClose, contracts, updateTime })
                console.log(result, 'sell result')
            } catch (e) {
                console.log(e, 'ERROR')
            }
        }}
        >X</button>
        </div>
        )})}
    </div>)
}