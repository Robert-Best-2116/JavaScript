import React, {useState, useEffect} from 'react'
import axios from "axios";

const AxiosPokemon = () => {
    //use [] for adding an array, use {} for updating a single object. 
    const [pokemon, setPokemon] = useState([]);
    // this is for adding one object to state, 
    const[onePokemon, setOnePokemon] = useState({});
    
    
    useEffect(() => {
        
        //imports API with Axios
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=1279")
        .then(response=>
            {
                console.log(response)
                //use response.data.results, so that we can target the array and have that information placed into the useState 
                setPokemon(response.data.results)
            })
        .catch(err=>{
            console.log(err);
        })
    }, [])

//should be able to iterate though the pokemon object that was set through the API call. need to target the array inside of the object not simply the array. 
  return (
    <div>
      <ul>
        {
          pokemon.map((pokemonObj, index)=>{
            return (<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>

    </div>
  )
}

export default AxiosPokemon