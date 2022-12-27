import { useEffect, useState } from "react";

import { httpFetchOpenPosition, httpClosePosition } from "./requests";

function usePositions() {
  const [positions, setPositions] = useState([]);

  const getPositions = async () => {
    const openPositions = await httpFetchOpenPosition();
    setPositions(openPositions);
  };

  useEffect(() => {
    getPositions();
  }, [getPositions]);

  const closePosition = async (e) => {
    e.preventDefault();

    const { symbol, side, contracts } = positions;
    const type = "market";
    let sideClose = side === "long" ? "sell" : "buy";
    console.log(symbol, type, sideClose, contracts);

    await httpClosePosition({ symbol, type, sideClose, contracts });
  };

  return {
    positions,
    getPositions,
    closePosition,
  };
}

export default usePositions;
