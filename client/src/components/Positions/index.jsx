const Positions = ({ positions, closePosition }) => {
  return (
    <div className="ordini">
      <p>POSITION </p>
      <button className="close-button" onClick={closePosition}>
        X
      </button>
    </div>
  );
};

export default Positions;
