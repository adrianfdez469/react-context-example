import React, { useContext } from 'react';
import '../App.css'
import { CounterContext } from '../context/context'
const CmpA = props => {

  const { increment, decrement } = useContext(CounterContext);

  return (
    <div className="cmpA">
      <h1>A</h1>
      <input type="button" onClick={increment} value="Incrememnt" />
      <input type="button" onClick={decrement} value="Decrement" />
    </div>
  );

}
export default CmpA;