import React, { useContext } from 'react';
import './App.css';
import Auth from './components/auth'
import Formulario from './components/exampleForm'
import { AuthContext, useAuthContext } from './context/authContext'

function App() {

  const valueProvider = useAuthContext();

  return (
    <AuthContext.Provider value={valueProvider}>
      <InnerApp />
    </AuthContext.Provider>
  )
}

const InnerApp = () => {
  const data = useContext(AuthContext)

  return data.accessToken ? <Formulario /> : <Auth />;
}

export default App;
