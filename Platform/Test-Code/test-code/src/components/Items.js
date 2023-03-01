import React, {useState} from 'react';


const Items = () => {
    const [state, setState] = useState({
        items: [],
        totalPrice: 0.00
    });
    console.log(state.items, state.totalPrice);
    const click = () => {
        setState({ items: state.items, totalPrice: state.totalPrice + 10.99 });
        
        console.log(state.items, state.totalPrice);
    }
  return (
    <div>
        <p>{state.items} {state.totalPrice}</p>
        <button onClick={click}>Change Items</button>
    </div>

  )
}

export default Items