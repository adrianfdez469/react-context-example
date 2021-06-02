import React, { createContext, } from 'react';

export const CounterContext = React.createContext();

export const CounterProvider = ({ children }) => {

  const [counter, setCounter] = React.useState(0);

  const add = () => {
    setCounter(counter + 1);
  }
  const sub = () => {
    setCounter(counter - 1);
  }

  return (
    <CounterContext.Provider value={{ value: counter, increment: add, decrement: sub }} >
      {children}
    </CounterContext.Provider>
  )
}

