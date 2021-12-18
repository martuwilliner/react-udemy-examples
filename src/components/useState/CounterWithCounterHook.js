import React from "react";
import { useCounter } from "../../hooks/useCounter";
import './counter.css'



export const CounterWithCounterHook = () => {


    const {state, increment, decrement, reset} = useCounter( 100 )

  return (
    <>
      <h1>Counter w/ Hook: {state}</h1>
      <hr />

      <button
      className="btn btn-primary"
      onClick={ () => increment(2)}>Sumar</button> {/* 2 es el factor de useCounter */}


<button
      className="btn btn-primary"
      onClick={reset}>Reset</button>

      <button
      className="btn btn-primary"
      onClick={() => decrement(3)}>Restar</button>
    </>
  );
};
