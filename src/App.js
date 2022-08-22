import { useState } from "react";
import "./styles.css";

export default function App() {
  const [clickNum, setClickNum] = useState(0);

  const increaseNum = () => {
    setClickNum((clickNum) => clickNum + 1);
  };
  const decreaseNum = () => {
    setClickNum((clickNum) => clickNum - 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <h3>{clickNum}</h3>
      <button
        className="buttons"
        onClick={() => {
          increaseNum();
        }}
      >
        Increase
      </button>
      <button
        className="buttons"
        onClick={() => {
          setClickNum(0);
        }}
      >
        Reset
      </button>
      <button
        className="buttons"
        onClick={() => {
          decreaseNum();
        }}
      >
        Decrease
      </button>
    </div>
  );
}
