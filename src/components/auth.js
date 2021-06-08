import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext'

const Auth = props => {

  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const contextData = useContext(AuthContext);

  const handleChangeUser = (event) => {
    const usuario = event.target.value;
    setUser(usuario)
  }
  const handleChangePass = (event) => {
    const contrasenna = event.target.value;
    setPass(contrasenna)
  }

  const handleLogin = async () => {
    const data = await getToken();

    // llenar context
    contextData.setEmail(data.email);
    contextData.setAccessToken(data.accessToken);

  }


  const getToken = () => {
    // POST user + pass
    // get response
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          username: 'Pepe',
          email: 'pepe@nauta.cu',
          accessToken: '545s7dad49a8s4d6as54das98d4as9d84as9d84as6d5a4sd98as4d'
        });
      }, 2000)
    });
  }

  return (
    <>
      <h1>
        Autenticacion
      </h1>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" value={user} onChange={handleChangeUser} />
      <label for="pwd">Password:</label>
      <input type="password" id="pwd" name="pwd" value={pass} onChange={handleChangePass} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}





export default Auth;