import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

const AuthorsAll = () => {

  //Setting State for Authors
  const [authors, setAuthors] = useState([]);

  //Listing all Authors with API call
  useEffect(()=> {
    axios.get("http://localhost:8000/api/authors")
    .then((res) => {
        console.log(res.data);
        setAuthors(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
    }, [])

  //Delete Author
  const deleteAuthor = (Id) => {
    axios.delete(`http://localhost:8000/api/author/${Id}`)
        .then(res => {
            console.log(res.data)
            const filteredAuthors = authors.filter(authors => authors._id !== Id)
            setAuthors(filteredAuthors);

        })
        .catch((err) => {
            console.log(err);
        });
}

  return (
    <div>
      <div>
      <h1>Add An Author!</h1>
      <p><Link to={`/author`}>Add an Author</Link></p>
      <p>We have quotes by: </p>
      </div>
      <table>
        <tr>
          <th>Author</th>
          <th>Actions</th>
        </tr>
          {
            authors.map((author, idx) => {
              return (
              <tr key={idx}>
                <td><Link to={`/author/${author._id}`}>{author.name}  </Link></td>
                <td><Link to={`/author/edit/${author._id}`}><button>Edit</button></Link>
                        <button onClick={(e) => deleteAuthor(author._id)}>Delete</button></td>
              </tr>
              )
            })
          }
      </table>
      <div>

      </div>
    </div>
  )
}

export default AuthorsAll