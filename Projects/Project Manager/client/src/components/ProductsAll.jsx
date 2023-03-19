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


    //Loop through the list of products with .map, create Links to view each item
  return (
    <div>
        {
            products.map((product) =>{
                return (
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductsAll