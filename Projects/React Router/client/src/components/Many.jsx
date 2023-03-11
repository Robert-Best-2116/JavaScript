import React from 'react'
import { useParams, Link } from 'react-router-dom';

const Many = (props) => {
    const {word, color, bkgrndColor} = useParams();
    return (
      <div style={{backgroundColor : bkgrndColor}}>
        <h1 style={{color : color}}>
          The word is : {word}
        </h1>
        <Link to={"/"}>Go Back</Link>
      </div>
    )
  }

export default Many