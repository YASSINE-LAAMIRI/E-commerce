import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProd } from '../JS/actions/productAction'
import ListProd from '../components/ListProd'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.productReducer.products)
 
  useEffect(() => {
    dispatch(getAllProd())
//tablear de dependance
  }, [dispatch])
 
  return (
    <div>
      <ListProd products={products} all={true}/>
    </div>
  )
}

export default Home