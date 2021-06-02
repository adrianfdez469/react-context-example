import React from 'react';
import CmpA from './componentA'
import CmpB from './componentB'

const Parent = props => {

  // Este es un cmponente intermedio que no se entera de los datos que pasan del padre a los hijos porque no esta subscrito al context.

  return (
    <div className="parent">
      <CmpA />
      <CmpB />
    </div>
  );

}
export default Parent;