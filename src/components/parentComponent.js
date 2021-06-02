import React from 'react';
import CmpA from './componentA'
import CmpB from './componentB'

const Parent = props => {

  return (
    <div className="parent">
      <CmpA />
      <CmpB />
    </div>
  );

}
export default Parent;