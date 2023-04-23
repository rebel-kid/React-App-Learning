import React from 'react'
import Product from './Product';
const Home = () => {
  const arr = [1,2,3,4,5];

  return (
    <div>
      <h2>Home Component</h2>
      {
        arr.map((item)=>{
          return <Product value={item} key={item}/>
        })
      }
    </div>
  )
}

export default Home