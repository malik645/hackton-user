import React from 'react'
import { useSelector } from 'react-redux'
const Test = () => {
    const abc = useSelector((state) => state.changeTheNumber)
  return (
    <div>
      <div>{abc}</div>
    </div>
  )
}

export default Test
