import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {

    //Pass in Product _id and set up useState & Navigate
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    //Get Product Information. 
    useEffect (() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                console.log(res.data);
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            }) 
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //Edit Submission W/ Navigation to Dashboard
    const editProduct = (e) => {

      e.preventDefault();
            
      axios.patch(`http://localhost:8000/api/product/${id}`, {
          title,
          price,
          description
      }) 
          .then(res =>{
              console.log(res.data);
              navigate("/")

      }) 
          .catch(err => {
              console.log(err)
          })
    }

  return (
    <form onSubmit={editProduct}> 
        <div>
            <h1>Edit</h1>
        </div>
        <div>
            <p>
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </p>
        </div>
        <div>
            <p>
                <label>Price: </label>
                <input type="double" value={price} min="0" onChange={(e) => setPrice(e.target.value)}/>
            </p>
        </div>
        <div>
            <p>
                <label>Description: </label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </p>
        </div>
        <div>
            <input type="submit"/>
        </div>
    </form>
  )
}

export default ProductEdit;