import React, { useReducer } from "react";

const acState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    case "reset" :
       return { count: 0}
    default:
      throw new Error();
  }
}

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, acState);
  return (
    <div className="counter_reducer">
      <button className="counter">{state.count}</button>
      <div className="btns">
        <button onClick={() => dispatch({ type: "inc" })}> + </button>
        <button onClick={() => dispatch({ type: "reset" })}>
          <span class="material-symbols-sharp">refresh</span>
        </button>
        <button onClick={() => dispatch({ type: "dec" })}> - </button>
      </div>
    </div>
  );
}
