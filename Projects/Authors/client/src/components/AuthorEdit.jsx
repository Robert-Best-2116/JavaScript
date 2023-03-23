import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


const AuthorEdit = () => {

      //Pass in Author _id and set up useState, Navigate, errors
      const {id} = useParams();
      const [name, setName] = useState("");
      const [errors, setErrors] = useState({});
      const navigate = useNavigate();

    //Get Author Information. 
    useEffect (() => {
      axios.get(`http://localhost:8000/api/product/${id}`)
          .then( res => {
              console.log(res.data);
              setName(res.data.author.name)
          }) 
          .catch((err) => {
              console.log(err);
          });
  }, []);

      //Edit Submission W/ Navigation to Dashboard
      const editAuthor = (e) => {

        e.preventDefault();
              
        axios.patch(`http://localhost:8000/api/author/${id}`, {
            name
        }) 
            .then(res =>{
                console.log(res.data);
                navigate("/")
  
        }) 
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.err.errors);
            })
      }

      //Cancel
      const cancel = () => {
        navigate("/");
      }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <p><Link to={`/`}>Home  </Link></p>
      <form onSubmit={editAuthor}> 
        <div>
            <h1>Edit this Author</h1>
        </div>
        <div>
          {errors.name ?
                      <p>{errors.name.message}</p> :
                      null
                    } 
        </div>
        
        <div>
            <p>
                <label>Name </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </p>
        </div>
        <div>
            <button onClick={cancel}>Cancel</button>
            <input type="submit"/>
        </div>
      </form>
    </div>
  )
}

export default AuthorEdit