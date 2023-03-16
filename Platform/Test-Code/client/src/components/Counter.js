import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState (0);
    const handleClick = () => {
        setCount(
            count + 1
        );
    }
  return (
    <div>
        <h3> {count} </h3>
        <button onClick={ handleClick }>Click Me!!!!</button>
    </div>
  )
}

export default Counter