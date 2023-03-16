import React, {useState} from 'react'

const Text = () => {
    const [text, setText] = useState("");

    console.log(text);
    const click = () => {
        setText("state state I am setting state!!!");
        console.log(text);
    }

  return (
    <div>
        <p>{text}</p>
        <button onClick={click}>Change Text</button>
    </div>
  )
}

export default Text