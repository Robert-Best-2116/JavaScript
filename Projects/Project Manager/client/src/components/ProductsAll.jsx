import React, { useEffect} from 'react'
import {Link, link} from "react-router-dom";
import axios from 'axios';

const ProductsAll = (props) => {

    //Getters and Setters from Props
    const {products, setProducts} = props;

    //Listing All Products w/ API Call
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    //Delete Product 
    const deleteProduct = (Id) => {
        axios.delete(`http://localhost:8000/api/product/${Id}`)
            .then(res => {
                console.log(res.data)
                const filteredProducts = products.filter(product => product._id !== Id)
                setProducts(filteredProducts);

            })
            .catch((err) => {
                console.log(err);
            });
    }


    //Loop through the list of products with .map, create Links to view, edit, and delete each product.
  return (
    <div>
        {
            products.map((product) =>{
                return (
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}  </Link>
                        <Link to={`product/edit/${product._id}`}>Edit  </Link>
                        <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductsAll