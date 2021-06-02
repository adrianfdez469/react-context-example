import React, { useContext /* Se importa el hook de react para poser subcribirse a un contexto determinado*/ } from 'react';
import '../App.css'
// Se importa el contexto
import { CounterContext } from '../App'


const CmpB = props => {

  // En este componente nos subscribimos al contexto "CounterContext", y este devuelve lo que se pasa desde el provider por la prop "value".
  // En este caso especifico solo usamos la propiedad "contador"  que nos pasan desde el contexto, para poder leerla. 
  // Desde el componente A modificamos esa propiedad a travez del contexto, y este componente al estar subscrito al mismo contexto se renderiza cuando cambia
  // "contador"
  const { contador } = useContext(CounterContext); // Aqui nos subscribimos al contexto

  return (
    <div className="cmpB" >
      <h1>B</h1>
      <h2>Counter: {contador}</h2>
    </div>
  );

}
export default CmpB;