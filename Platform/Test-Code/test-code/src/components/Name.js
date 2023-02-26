import React, {useState} from 'react'

const Name = () => {
    const [name, setName] = useState(""
    );
    const click = () => {
        setName ("Scarry Terry")
    }
    console.log(name);
  return (
    <div>
        <p>{name}</p>
        <button onClick={click}>Change Name</button>
    </div>
  )
}

export default Name