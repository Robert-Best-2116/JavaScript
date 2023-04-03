import React, {useState} from 'react'
import axios from 'axios';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const AuthorForm = () => {

  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {


    e.preventDefault();
    
    axios.post('http://localhost:8000/api/author', {
        name
    }) 
        .then(res =>{
            console.log(res.data);
            setName("");
            navigate("/");
    }) 
        .catch(err => {
            console.log(err);
            setErrors(err.response.data.err.errors);
        })
}

  const cancel = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>Favorite Authors</h1>
      <p><Link to={`/`}>Home  </Link></p>
      <form onSubmit={onSubmitHandler}>
        
            <div>
              <p>Add a new author:</p>
              <div>
              {errors.name ?
                <p>{errors.name.message}</p> :
                null
              } 
                <label>Name</label>
                <input type="text" onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <p>
                <input type="submit" /> 
                <button onClick={cancel}>Cancel</button>
                </p>
              </div>
            </div>
        </form>
    </div>
  )
}

export default AuthorForm;