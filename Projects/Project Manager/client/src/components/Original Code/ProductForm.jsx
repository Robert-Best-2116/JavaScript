import React, { useState} from 'react'
import axios from 'axios';

const ProductForm = (props) => {

        //Getters and Setters for Product Information

        const {products, setProducts} = props;
        const [title, setTitle] = useState("");
        const [price, setPrice] = useState("0");
        const [description, setDescription] = useState("");
        const [onSale, setOnSale] = useState("yes");

        // Validation Functionality

            //Set Errors 
        const [titleError, setTitleError] = useState("");
        const [titleErrorLength, setTitleErrorLength] = useState("")
        const [priceError, setPriceError] = useState("");
        const [descriptionError, setDescriptionError] = useState("");
        const [descriptionErrorLength, setDescriptionErrorLength] = useState("");


            //Validator
        const formValidator =() => {
            let isValid = true;
            //parsed the value to an int, so i could use it as a numerical value.
            const Price = parseInt(price);
            if (!title) {
                console.log("no title")
                setTitleError("Title Is Required");
                isValid = false
            }
            if (title.length < 3) { 
                title ? 
                    setTitleError("") :
                console.log("title to short");
                setTitleErrorLength("Title Must Be 3 Characters or More")
                isValid = false
            }
            //resets title Error messages if you fix the title problems
            if (title.length >= 3) {
                setTitleError("")
                setTitleErrorLength("")
            }
            //catches negative numbers, and zero catches strings, and no value
            if (Price < 1 || !Price) {
                console.log("no price");
                setPriceError("Price is required and must be higher than 0")
                isValid = false
            }
            //resets Price Error once fixed
            if (Price >= 1) {
                setPriceError("")
            }
            if(!description) {
                console.log("description is required")
                setDescriptionError("Description is Required")
                isValid = false
            }
            if (description.length < 5) {
                description ? 
                    setDescriptionError("") : 
                console.log("description to short");
                setDescriptionErrorLength("Description must be 5 or more characters.")
                isValid = false
            }
            if (description.length >= 5) {
                setDescriptionError("")
                setDescriptionErrorLength("")
            }
            console.log(isValid);
            return isValid
        }

        //Form Submission
        const onSubmitHandler = (e) => {


                e.preventDefault();
                
                if (formValidator()) {
                    axios.post('http://localhost:8000/api/product', {
                        title,
                        price,
                        description,
                        onSale
                    }) 
                        .then(res =>{
                            console.log(res.data);
                            setProducts([...products, res.data.product]);
                    }) 
                        .catch(err => {
                            console.log(err)
                        })
                }

        }
        //Form 
  return (
    <form onSubmit={onSubmitHandler}> 
        <div id='error'>

        </div>
        <div>
            {
                titleError ? 
                <p> {titleError} </p> :
                ''
            }
            {
                titleErrorLength ? 
                <p> {titleErrorLength} </p> :
                ''
            }
            <p>
                <label>Title: </label>
                <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
            </p>
        </div>
        <div>
            {
                priceError ? 
                <p> {priceError} </p> :
                ''
            }
            <p>
                <label>Price: $</label>
                <input type="double" placeholder='1' min="0" onChange={(e) => setPrice(e.target.value)}/>
            </p>
        </div>
        <div>
            {
                descriptionError ?
                <p>{descriptionError}</p> :
                ''
            }
            {
                descriptionErrorLength ?
                <p>{descriptionErrorLength}</p> :
                ''
            }
            <p>
                <label>Description: </label>
                <input type="text" placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
            </p>
        </div>
        <div>
            <label>On Sale:</label>
            <select id="sale" onChange={(e) => setOnSale(e.target.value) }>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <div> 
            
                
            <input type="submit"/>
            
        </div>
    </form>
  )
}

export default ProductForm