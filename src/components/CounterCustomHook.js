import { useEffect, useState } from "react";
import useCounter from "../custom-hook/useCounter";

export default function CounterCustomHook() {
  const [count, counterData] = useCounter(0);
  const [inputVal, setInputVal] = useState("");
  const [val, setValue] = useState(0);

  useEffect(() => {
    counterData.setVal(val);
  },[val]);
 
  const handleKeyUp = (e) => {
    try {
      const input = e.target.value;
      setInputVal(input);

      if (e.key === "Enter") {
        e.target.value = ""
        const number = parseInt(inputVal);
        if (!isNaN(number)) {
          setValue(number);
        } else {
          console.log("not a num");
        }
      }
    } catch (e) {
      console.log(e);
    }
    console.log(count)
  };

  return (
    <div className="counter_custom">
      <div className="counter"> {count}</div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Enter a number" onKeyUp={handleKeyUp} type="text" />
      </form>
      <div className="btns">
        <button onClick={counterData.setInc}> + </button>
        <button onClick={counterData.reset}>
          <span className="material-symbols-sharp">refresh</span>
        </button>
        <button onClick={counterData.setDec} >  - </button>
      </div>
    </div>
  );
}
