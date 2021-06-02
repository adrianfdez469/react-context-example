import React, { useContext } from 'react';
import '../App.css'
import { CounterContext } from '../App'


const CmpB = props => {

  const { value } = useContext(CounterContext);

  return (
    <div className="cmpB" >
      <h1>B</h1>
      <h2>Counter: {value}</h2>
    </div>
  );

}
export default CmpB;