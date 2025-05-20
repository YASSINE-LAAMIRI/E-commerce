
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getMyProd } from '../JS/actions/productAction'
import ListProd from '../components/ListProd'
import AddProduct from '../components/AddProduct'
import { Container, Row, Col } from 'react-bootstrap'

const Profile = () => {
  const dispatch = useDispatch()
  const myProd = useSelector(state => state.productReducer.myProduct)
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    dispatch(getMyProd())
  }, [dispatch])

  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <Container fluid>
      <Row>
        <Col md={showSidebar ? 9 : 12} style={{ transition: 'all 0.3s' }}>
          {Array.isArray(myProd) && <ListProd products={myProd} all={false} />}
        </Col>

        {/* Sidebar verticale à droite */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100vh',
            width: showSidebar ? '350px' : '0',
            backgroundColor: '#f8f9fa',
            borderLeft: '1px solid #ddd',
            overflowX: 'hidden',
            overflowY: 'auto',
            transition: 'width 0.3s',
            boxSizing: 'border-box',
            padding: showSidebar ? '20px' : '0',
            zIndex: 1050,
          }}
        >
          {showSidebar && <AddProduct />}
        </div>

        {/* Bouton vertical collé à la bordure gauche de la sidebar */}
  <button
  onClick={toggleSidebar}
  style={{
    position: 'fixed',
    top: '50%',
    right: showSidebar ? '350px' : '0',
    transform: 'translateY(-50%)',
    backgroundColor: '#121212',
    color: 'white',
    border: 'none',
    padding: '0',
    cursor: 'pointer',
    zIndex: 1100,
    transition: 'right 0.3s',
    borderRadius: '6px 6px 0 0',
    width: '40px',
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <span
    style={{
      transform: 'rotate(-90deg)',
      transformOrigin: 'center',
      display: 'block',
      whiteSpace: 'nowrap',
      fontWeight: 'bold',
    }}
  >
    {/* 'Fermer' */}
    {showSidebar ? '❌' : 'Ajouter un Produit'} 
  </span>
</button>



      </Row>
    </Container>
  )
}

export default Profile
