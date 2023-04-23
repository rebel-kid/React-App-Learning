import React from 'react'
import { useParams } from 'react-router-dom'
const Product = ({value}) => {
    const params = useParams();
  return (
    <div>
        <h3>#Product</h3>
        <h3>{params.id}</h3>
        <h2>Value from API</h2>
        <h3>{value}</h3>
    </div>
    
  )
}

export default Product