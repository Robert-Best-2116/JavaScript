import React, { useState} from 'react'
import axios from 'axios';

const ProductForm = () => {

        const [title, setTitle] = useState("");
        const [price, setPrice] = useState("");
        const [description, setDescription] = useState("");

        const onSubmitHandler = (e) => {

            e.preventDefault();
            
            axios.post('http://localhost:8000/api/product', {
                title,
                price,
                description
            }) 
                .then(res =>{
                    console.log(res.data);
                    //set([...[products, res.data]]);
            }) 
                .catch(err => console.log(err))

        }




  return (
    <form onSubmit={onSubmitHandler}> 
        <div>
            <p>
                <label>Title: </label>
                <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
            </p>
        </div>
        <div>
            <p>
                <label>Price: </label>
                <input type="number" placeholder='1' min="0" onChange={(e) => setPrice(e.target.value)}/>
            </p>
        </div>
        <div>
            <p>
                <label>Description: </label>
                <input type="text" placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
            </p>
        </div>
        <div>
            <input type="submit"/>
        </div>
    </form>
  )
}

export default ProductForm