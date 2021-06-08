import React, { useState } from 'react';



export const AuthContext = React.createContext();

export const useAuthContext = () => {

  const [email, setEmail] = useState();
  const [accessToken, setAccessToken] = useState();

  return {
    email,
    accessToken,
    setEmail,
    setAccessToken
  }
}