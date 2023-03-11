import React from 'react'
import { useParams, Link } from 'react-router-dom';

const Rand = (props) => {
    const {rand} =useParams(); 
    
  
      if (isNaN(rand) ) {
        return (
          <div>
            <h1>
                The word is: {rand}
            </h1>
                <Link to={"/"}>Go Back</Link>
          </div>
        );
        } else {
          return (
            <div>
              <h1>
                  The Number is: {rand}
              </h1>
                  <Link to={"/"}>Go Back</Link>
            </div>
          );
        }
      };
  

export default Rand