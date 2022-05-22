import React,{useState} from 'react'
import { productsData } from '../Data'
import {Link} from 'react-router-dom'


const Card = () => {
 
  const [product, setProduct] = useState(productsData);
            return(
                <div className='container'>
                  <div className='row'>
                {product.map((item) => {
                    return (
                <div className='col-sm-4 mx-auto py-5'>
                        <div className="card">
  <div className="card-img-top">{item.imgSrc}</div>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.price}<span className='fw-bold'>.RS</span></p>
    <Link className="btn btn-primary" to={'/addCard'}>Add to Card</Link>
    
  </div>
</div> 
                    
            

    </div>
      );
    })}
                </div>
                </div>  
  )}

export default Card
