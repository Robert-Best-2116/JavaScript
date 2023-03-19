import React, {useState} from 'react'
import ProductForm from "../components/ProductForm";
import ProductsAll from "../components/ProductsAll";


const Main = (props) => {

    const [products, setProducts] = useState([]);
    

  return (
    <div>
      <ProductForm products={products} setProducts={setProducts} />
      <ProductsAll products={products} setProducts={setProducts} />
        
    </div>
  )
}

export default Main;