import React, { useContext /* Se importa el hook de react para poser subcribirse a un contexto determinado*/ } from 'react';
import '../App.css'
// Se importa el contexto
import { CounterContext } from '../App'


const CmpA = props => {

  // En este componente nos subscribimos al contexto "CounterContext", y este devuelo que se pasa desde el provider por la prop "value".
  // En este caso especifico usamos los metodos "increment" y "decrement" que nos pasan desde el contexto, para poder ejecutar acciones y modificar el contador 
  // que esta creado y gestionado en padre superior. 
  const { increment, decrement } = useContext(CounterContext); // Aqui nos subscribimos al contexto

  return (
    <div className="cmpA">
      <h1>A</h1>
      <input type="button" onClick={increment} value="Incrememnt" />
      <input type="button" onClick={decrement} value="Decrement" />
    </div>
  );

}
export default CmpA;