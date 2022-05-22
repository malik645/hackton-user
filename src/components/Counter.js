import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {incNumber, decNumber} from '../actions/index'

const Counter = () => {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();
  return (
    
    <div>
         
    <button className="btn btn-success" onClick={() => dispatch(decNumber(1))}>-</button>
    <span className='px-2 fw-bold'>{myState}</span>
    <button className="btn btn-success" onClick={() => dispatch(incNumber(1))}>+</button>
    <br/>
    <button type="button" class="btn btn-success mt-3">Add to Card</button>
  </div>  
  )
}

export default Counter
