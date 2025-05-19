// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// import { getOneProd } from '../JS/actions/productAction'
// const DetailProd = () => {
//     const params = useParams()
//     const dispatch = useDispatch()
//     const product = useSelector(state => state.productReducer.prod)
 //console.log(product)
//     useEffect(() => {
//         dispatch(getOneProd(params.id))
//     }, [ params,dispatch])
//   return (
//     <div>
//         <h1>{product.title}</h1>
//         {product.title}
//         {product.description}
//         <img src={product.image} alt={product.description} />
//         <p>{product.price}$</p>
//     </div>
//   )
// }

// export default DetailProd

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProd } from '../JS/actions/productAction';
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonGroup,
  Card,
} from 'react-bootstrap';
import { addToCart } from '../JS/actions/cartActions';

const DetailProd = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.productReducer.prod);
  const [selectedSize, setSelectedSize] = useState('L');
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    dispatch(getOneProd(id));
  }, [id, dispatch]);

  useEffect(() => {
    // Dès que le produit est chargé, on définit l’image principale
    if (product && product.image) {
      setMainImage(product.image);
    }
  }, [product]);

  return (
    <Container className="my-5">
      <Card className="shadow-lg p-4 border-0">
        <Row>
          {/* Images Section */}
          <Col md={6} className="d-flex">
            {/* <Col xs={3} className="d-flex flex-column gap-2">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src={product.image}
                  thumbnail
                  onClick={() => setMainImage(product.image)}
                  style={{
                    cursor: 'pointer',
                    objectFit: 'cover',
                    height: '80px',
                    border: mainImage === product.image ? '2px solid black' : '1px solid #ccc'
                  }}
                />
              ))}
            </Col> */}
            <Col xs={9}>
              <Image src={mainImage} fluid rounded  alt={product.title}/>
            </Col>
          </Col>

          {/* Product Info */}
          <Col md={6}>
            <div className="mb-3">
              <h2 className="fw-bold">{product.title}</h2>
              <div>
               
              </div>
            </div>

            <h3 className="text-danger mb-3">${product.price}</h3>
            <p className="text-secondary">{product.description}</p>

            <div className="mb-3">
              <h6 className="fw-semibold">Select Size</h6>
              <ButtonGroup>
                {['S','M', 'L', 'XL'].map(size => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'dark' : 'outline-secondary'}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </ButtonGroup>
            </div>

          <Button
  variant="dark"
  size="lg"
  className="w-100 mt-3"
  onClick={() => dispatch(addToCart(product, 1))
    
  }
>
  🛒 Add to Cart
</Button>
            <hr className="my-4" />
            <ul className="text-muted small">
              <li>✅ 100% Original product</li>
              <li>🚚 Cash on delivery available</li>
              <li>🔄 Return policy within 7 days</li>
            </ul>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetailProd;
