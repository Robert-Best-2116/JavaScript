import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Link} from "react-router-dom";


const AuthorOne = () => {

  //Pass in Author _id and set up useState, set up Navigate 
  const {id} = useParams();
  const [author, setAuthor] = useState({});

    // Retrieving Author Information 
    useEffect (() => {
      axios.get(`http://localhost:8000/api/author/${id}`)
          .then( res => {
              console.log(res.data);
              setAuthor(res.data.author);
          }) 
          .catch((err) => {
              console.log(err);
          });
  }, []);

  return (
    <div>
      <h1>Favorite Authors</h1>
      <p><Link to={`/`}>Home  </Link></p>
      <p>Name: {author.name}</p>
    </div>
  )
}

export default AuthorOne