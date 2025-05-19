// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllProd } from '../JS/actions/productAction';
// import ListProd from '../components/ListProd';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Carrosel from '../components/Carrosel';
// import InfoBanner from '../components/infoBanner';

// const Home = () => {
//   const dispatch = useDispatch();
//   const products = useSelector(state => state.productReducer.products);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const query = new URLSearchParams(location.search);
//   const categoryFromURL = query.get('category') || 'All';

//   const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);

//   useEffect(() => {
//     dispatch(getAllProd());
//   }, [dispatch]);

//   useEffect(() => {
//     setSelectedCategory(categoryFromURL);
//   }, [categoryFromURL]);

//   const handleFilterChange = (category) => {
//     navigate(`/?category=${category}`);
//   };

//   const filteredProducts = selectedCategory === 'All'
//     ? products
//     : products.filter(prod => prod.category === selectedCategory);

//   return (
//     <div className="container mt-4">
//       <div className="mb-4 text-center">
//         {['All', 'Homme', 'Femme', 'Enfant'].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => handleFilterChange(cat)}
//             className={`btn mx-2 ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'}`}
//           >
//             {cat}
//           </button>
          
//         ))}
        
      
//       <Carrosel/>
//       {/* <hr /> */}
//       <InfoBanner/>
//       <br />
     
      
//       <ListProd products={filteredProducts} all={true} />
//     </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProd } from '../JS/actions/productAction';
import ListProd from '../components/ListProd';
import { useLocation, useNavigate } from 'react-router-dom';
import Carrosel from '../components/Carrosel';
import InfoBanner from '../components/infoBanner';

import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const categoryFromURL = query.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);

  useEffect(() => {
    dispatch(getAllProd());
  }, [dispatch]);

  useEffect(() => {
    setSelectedCategory(categoryFromURL);
  }, [categoryFromURL]);

  const handleFilterChange = (category) => {
    navigate(`/?category=${category}`);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(prod => prod.category === selectedCategory);

  return (
    <Container className="mt-4">
      <Carrosel />
      <InfoBanner />

      <Row className="mt-5">
        {/* Colonne gauche : catégories */}

<Col md={3}>
  <div style={{ position: 'sticky', top: '110px', zIndex: 100 }}>
    <h5>Catégories</h5>
    <ListGroup>
      {['All', 'Homme', 'Femme', 'Enfant'].map((cat) => (
        <ListGroup.Item
          key={cat}
          action variant="light"
          active={selectedCategory === cat}
          onClick={() => handleFilterChange(cat)}
        >
          {cat}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
</Col>

        {/* Colonne droite : produits */}
        <Col md={9}>
  <ListProd products={filteredProducts} all={true} />
</Col>

      </Row>
    </Container>
  );
};

export default Home;
