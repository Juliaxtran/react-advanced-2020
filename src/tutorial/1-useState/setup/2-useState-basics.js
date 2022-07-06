import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText ] = useState('random Title');
  const handleClick = () => {
    if (text === 'random Title') {
    setText('Hello World');
  } else {
    setText('random Title');
  }
}
  return (
    <>
    <h1>{text}</h1>
    <button type='button' className='btn' onClick={handleClick}>
      Change Title
      </button>
    </>
  )
};

export default UseStateBasics;
