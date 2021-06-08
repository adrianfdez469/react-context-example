import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext'

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState();
  const contextData = useContext(AuthContext);

  const handleGuardar = () => {
    fetch('http:localhost:3000/api/submit', {
      headers: {
        'application': 'application/json',
        'authorization': 'Bearer ' + contextData.accessToken
      },
      data: JSON.stringify({
        nombre, edad
      })
    })
  }

  return (
    <div>

      <p>{contextData.email}</p>

      <label for="nombre" >Nombre</label>
      <input type="text" id="nombre" name="nombre" value={nombre} onChange={(event) => { setNombre(event.target.value) }} />
      <label for="edad">Edad</label>
      <input type="text" id="edad" name="edad" value={edad} onChange={(event) => { setEdad(event.target.value) }} />
      <button onClick={handleGuardar}>Guardar</button>
    </div>
  );

}
export default Formulario;