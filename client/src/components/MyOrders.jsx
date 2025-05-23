
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyOrders } from '../JS/actions/orderAction';
import { Container, Row, Col, Card, Badge, Spinner, Alert,  } from 'react-bootstrap';
import { FaBoxOpen, FaCalendarAlt,  FaTruck } from 'react-icons/fa';


const MyOrders = () => {
  const dispatch = useDispatch();
  const { myOrders = [], isLoad = false } = useSelector(state => state.orderReducer || {});
  const [showNewOrderAlert, setShowNewOrderAlert] = useState(false);
 
  const isRecentlyCreated = (createdAt) => {
    const now = new Date();
    const created = new Date(createdAt);
    return (now - created) / 1000 < 10;
  };

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  useEffect(() => {
    if (myOrders.length > 0) {
      const sorted = [...myOrders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      if (isRecentlyCreated(sorted[0].createdAt)) {
        setShowNewOrderAlert(true);
        const timer = setTimeout(() => setShowNewOrderAlert(false), 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [myOrders]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'success';
      case 'Shipped': return 'info';
      case 'In preparation': return 'warning';
      default: return 'secondary';
    }
  };

  // Tri des commandes de la plus récente à la plus ancienne
  const sortedOrders = [...myOrders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <Container className="py-5 " >
      <style>
        {`
          @keyframes flashYellow {
            0% { background-color: #fff3cd; }
            100% { background-color: white; }
          }
          .recent-order {
            animation: flashYellow 2s ease-in-out;
          }
        `}
      </style>

      {showNewOrderAlert && (
        <Alert variant="warning" className="text-center fw-bold" aria-live="polite">
          🆕 Nouvelle commande ajoutée !
        </Alert>
      )}

      <h2 className="mb-4 text-center fw-bold">📋 Mes commandes</h2>

      {isLoad ? (
        <div className="text-center mt-5">
          <Spinner animation="border" />
          <p className="mt-3">Chargement des commandes...</p>
        </div>
      ) : sortedOrders.length === 0 ? (
        <p className="text-center text-muted fs-5 mt-5">Aucune commande trouvée.</p>
      ) : (
        <Row >
          {sortedOrders.map(order => (
            <Col key={order._id} md={6} lg={4} className="mb-4">
              <Card className={`shadow border-2 h-100 ${isRecentlyCreated(order.createdAt) ? 'recent-order' : ''}`}>
                <Card.Header className="bg-white border-bottom-0 d-flex justify-content-between align-items-center">
                  <span className="fw-bold"><FaBoxOpen className="me-2 text-primary" />Commande n°{order._id.slice(-6)}</span>

  <Badge bg={getStatusColor(order.status)} className="text-uppercase">
  {order.status === 'Delivered' ? 'Livrée' : order.status === 'Shipped' ? 'Envoyé' : 'En cours'}
</Badge>




                </Card.Header>
                <Card.Body>
                  <div className="mb-2 text-muted small">
                    <FaCalendarAlt className="me-2" />
                    Commandée le : {new Date(order.createdAt).toLocaleDateString('fr-FR')}
                  </div>

                  <div className="mb-2 text-muted small">
                    <FaTruck className="me-2" />
                    Livraison à : <span className="fw-semibold text-dark">{order.shippingAddress || 'N/A'}</span>
                  </div>

                  <hr />

                  <div className="mb-2 fw-bold">Articles :</div>
                  {order.products.map(item => (
                    <div key={item.product._id} className="mb-1">
                      🛍️ <strong>{item.product.name}</strong> — {item.quantity} × {item.product.price} €
                    </div>
                  ))}
                </Card.Body>
               <Card.Footer className="bg-light text-end">
                                <span className="fw-semibold text-dark">
                                  
                                  💰Total : {order.total !== undefined ? order.total : 'N/A'} €
                                </span>
                              </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MyOrders;
