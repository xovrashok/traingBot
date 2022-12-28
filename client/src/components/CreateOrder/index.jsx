import useOrders from '../../hooks/useOrders';

const CreateOrder = ({ selectedSymbol, orderType, amount }) => {
  const { createLongOrder, createShortOrder, isMutating, data, error } = useOrders();

  // console.log(isMutating, data, error, selectedSymbol, orderType, amount,  '<<< isMutating, data, error');
  console.log(isMutating, data, error,  '<<< isMutating, data, error');

  // Event handles
  const handleLongClick = () => createLongOrder(selectedSymbol, orderType, amount);
  const handleShortClick = () => createShortOrder(selectedSymbol, orderType, amount);

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
