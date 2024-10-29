import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, minus, reset } from "../redux/actions/actionCreator";

const Counter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.count);

  const handlePlus = () => {
    dispatch(add());
  };

  const handleMinus = () => {
    dispatch(minus());
  };

  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <div>
      <h1>{data}</h1>
      <div className="buttons">
        <button onClick={handlePlus}>incrment</button>
        <button onClick={handleMinus}>decrement</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
