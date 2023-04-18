import React, { useState, useReducer } from "react";

const initialState = {count: 0}

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": 
      return {
      count: state.count + 1
      }
    case "DECREMENT":
      return {
      count: state.count -1
      }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(countReducer, initialState);
  function incrementCount() {
    dispatch({
      type: "INCREMENT"
    })
    console.log("incremented by 1")
  }
  function decrementCount() {
    dispatch({
      type: "DECREMENT"
    })
    console.log("decremented by 1")
  }
  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <p>{state.count}</p>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default Counter;
