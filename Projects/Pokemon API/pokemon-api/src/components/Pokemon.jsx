import React, {useEffect, useState} from 'react';

const Pokemon = () => {

  const [pokemon, setPokemon] = useState([])

  return (
    <div> 
        <h1>Pokemon</h1>
          useEffect(() => {

            fetch("https://pokeapi.co/api/v2/pokemon?limit=1279")
              .then(response => {
                return response.json();
            }).then(response => {
                setPokemon(response.results)
            }).catch(err=>{
                console.log(err);
            })

          }, [])
      
    </div>
  )
}

export default Pokemon;