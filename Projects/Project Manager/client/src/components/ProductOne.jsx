import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const ProductOne = () => {

    //Pass in Product _id and set up useState, set up Navigate 
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    // Retrieving Product Information 
    useEffect (() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                console.log(res.data);
                setProduct(res.data.product);
            }) 
            .catch((err) => {
                console.log(err);
            });
    }, []);

    //Delete Product 
    const deleteProduct = (Id) => {
        axios.delete(`http://localhost:8000/api/product/${Id}`)
            .then(res => {
                console.log(res.data)
                navigate("/")

            })
            .catch((err) => {
                console.log(err);
            });
    }

  return (
    <div>
        <p>Title: {product.title}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
    </div>
  )
}

export default ProductOne