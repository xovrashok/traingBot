import useOrders from '../../hooks/useOrders';
import usePosition from '../../hooks/usePositions';

const CreateOrder = ({ selectedSymbol, orderType, amount }) => {
  const { createLongOrder, createShortOrder, isMutating, data, error } = useOrders();
  const { mutate } = usePosition();

  // Event handles
  const handleLongClick = async () => {
    await createLongOrder(selectedSymbol, orderType, amount);
    mutate();
  };

  const handleShortClick = async () => {
    await createShortOrder(selectedSymbol, orderType, amount);
    mutate();
  };

  return (
    <div className="buttons">
      <button className="long" onClick={handleLongClick}>
        Long
      </button>
      <button className="short" onClick={handleShortClick}>
        Short
      </button>
    </div>
  );
};

export default CreateOrder;
