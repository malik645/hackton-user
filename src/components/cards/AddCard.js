import React from 'react'
import watch from '../../images/watch.jpg'
import Counter from '../Counter'
import {Link} from 'react-router-dom'
const AddCard = () => {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-sm-8 mx-auto'>
        <div className='row'>
        <h1 className='text-center py-5'>Product Card</h1>
        <div className='col-sm-6 pb-5'>
        <div class="card">
  <img class="card-img-top" src={watch} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Rolex</h5>
    <p class="card-text">10000<span className='fw-bold'>.RS</span></p>
  
    <Link className="btn btn-danger" to={'/'}>Delete Item</Link>

  </div>
</div>
        </div>
        <div className='col-sm-6 text-center'>
        <h2>Add Item</h2>
            <Counter/>
        </div>
    </div>
        </div>
    </div>
      
    </div>
  )
}

export default AddCard
