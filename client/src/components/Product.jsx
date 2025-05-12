import { Button, Card } from 'react-bootstrap'
//import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {deleteProd} from "../JS/actions/productAction"
import EditProduct from './EditProduct'
// import p1 from "../assets/p1.jpg"
//image




const Product = ({product,all}) => {
    const dispatch = useDispatch()
   const handleDelete = (id) => {
    if (window.confirm("Vouler-vous supprimer ce produit ?")) {
       dispatch(deleteProd(product._id))
    }
  }
  return (
    <div>
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>

         {/* {product.description} */}
         {product.price}$
         
        </Card.Text>
        {all? (
        <Link to={`/prod/${product._id}`}>
            <Button variant="primary">Voir détails</Button>
            </Link>
        ) : (
            <>
        {/* <Button variant="success" >Edit</Button> */}
        <Button variant="danger" onClick={handleDelete} >Delete</Button>
        <EditProduct product={product}/>
        {/*   componant au lieux de button */}
      
              </>
        )}
        
        
      </Card.Body>

    </Card>
    </div>
  )
}
//}

export default Product