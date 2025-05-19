import React, { useEffect } from 'react'
import{useDispatch, useSelector} from "react-redux"
import { getMyProd } from '../JS/actions/productAction'
import ListProd from '../components/ListProd'
import AddProduct from '../components/AddProduct'

const Profile = () => {
  const user = useSelector(state=>state.authReducer.user)
  const dispatch = useDispatch()
  //const products = useSelector(state => state.productReducer.products)
  const myProd = useSelector((state) => state.productReducer.myProduct)
 //console.log(myProd)
  useEffect(() => {

      dispatch(getMyProd())
    
  }, [dispatch])

  return (
    <div>

      {/* <h2 style={{margin:"10px", padding:"10px"}}> Hello {user?.name}</h2> */}
      {/* <ListProd products={myProd}/>   */}
      <AddProduct/>
      {Array.isArray(myProd) && <ListProd products={myProd} all={false}/>}
      

    </div>
  )
}

export default Profile