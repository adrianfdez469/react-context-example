import React from 'react';
import './App.css';
import ParentCmp from './components/parentComponent';

export const CounterContext = React.createContext();

function App() {

  const [counter, setCounter] = React.useState(0);

  const add = () => {
    setCounter(counter + 1);
  }
  const sub = () => {
    setCounter(counter - 1);
  }

  return (
    <div className="root">
      <CounterContext.Provider value={{ value: counter, increment: add, decrement: sub }}>
        <ParentCmp />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
