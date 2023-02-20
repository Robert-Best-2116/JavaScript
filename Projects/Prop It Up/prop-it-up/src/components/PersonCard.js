import React, {useState} from 'react';

const PersonCard = (props) => {
    const{firstName, lastName, hairColor, age } = props
    
    const [getAge, setAge] = useState(age)

    const addAge = () => {
        setAge(getAge + 1)
    }

  return (
    <div>
        <h1> {lastName}, {firstName} </h1> 
        <p>Age: {getAge} </p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={addAge}> {firstName} Birthday Button! </button>
    </div>
  )
}

export default PersonCard;