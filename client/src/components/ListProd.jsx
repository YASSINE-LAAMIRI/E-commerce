import React from 'react'
import Product from './Product'

const ListProd = ({products,all}) => {
  //console.log(all)
  return (
    <div style={{
      display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        {products.map(prod=> <Product key={prod._id}  product={prod} all={all}/>)}
        
        </div>
  )
}

export default ListProd