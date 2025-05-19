import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, updateOrderStatus } from '../JS/actions/orderAction';
import { Container, Row, Col, Card, Badge, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { FaBoxOpen, FaCalendarAlt, FaEuroSign, FaTruck, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllOrders = () => {
  const dispatch = useDispatch();
  const { orders = [], isLoad = false } = useSelector(state => state.orderReducer || {});
  const [statusUpdate, setStatusUpdate] = useState({});

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  useEffect(() => {
    if (orders.length > 0) {
      const initialStatus = {};
      orders.forEach(order => {
        initialStatus[order._id] = order.status;
      });
      setStatusUpdate(initialStatus);
    }
  }, [orders]);

  const handleStatusChange = (orderId, newStatus) => {
    setStatusUpdate(prev => ({ ...prev, [orderId]: newStatus }));
  };

  const handleUpdate = (orderId) => {
    const newStatus = statusUpdate[orderId];
    if (newStatus) {
      dispatch(updateOrderStatus(orderId, newStatus));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'success';
      case 'Shipped': return 'info';
      case 'In preparation': return 'warning';
      default: return 'secondary';
    }
  };

  const statusLabels = {
    'Delivered': 'Livrée',
    'Shipped': 'Envoyé',
    'In preparation': 'En cours'
  };

  return (
    <Container className="py-5" >
      <h2 className="mb-4 text-center fw-bold">📦 Toutes les commandes</h2>

      {isLoad ? (
        <div className="text-center mt-5">
          <Spinner animation="border" />
          <p className="mt-3">Chargement des commandes...</p>
        </div>
      ) : orders.length === 0 ? (
        <Alert variant="info" className="text-center">Aucune commande trouvée.</Alert>
      ) : (
        <Row>
          {orders.map(order => (
            <Col key={order._id} md={6} lg={4} className="mb-4">
              <Card className="shadow border-2 h-100">
                <Card.Header className="bg-white border-bottom-0 d-flex justify-content-between align-items-center">
                  <span className="fw-bold"><FaBoxOpen className="me-2 text-primary" />Commande n°{order._id.slice(-6)}</span>
                  <Badge bg={getStatusColor(order.status)} className="text-uppercase">
                    {statusLabels[order.status] || order.status}
                  </Badge>
                </Card.Header>

                <Card.Body>
                 

                  <div className="mb-2 text-muted small">
                    <FaCalendarAlt className="me-2" />
                    Commandée le :  {new Date(order.createdAt).toLocaleDateString('fr-FR')}
                  </div>

                  <div className="mb-2 text-muted small">
                    <FaTruck className="me-2" />
                    Livraison à : <span className="fw-semibold text-dark">{order.shippingAddress || 'N/A'}</span>
                  </div>

                  <hr />

                  <div className="mb-2 fw-bold">Mise à jour du statut :</div>
                  <Form.Select
                    value={statusUpdate[order._id]}
                    onChange={(e) => handleStatusChange(order._id, e.target.value)}
                    className="mb-3"
                  >
                    <option value="In preparation">En cours</option>
                    <option value="Shipped">Envoyé</option>
                    <option value="Delivered">Livrée</option>
                  </Form.Select>

                  <div className="d-flex justify-content-between">
                    <Button variant="dark" size="sm" onClick={() => handleUpdate(order._id)}>
                      Mettre à jour
                    </Button>
                    
                  </div>
                </Card.Body>

                <Card.Footer className="bg-light text-end">
                  <span className="fw-semibold text-dark">
                    <FaEuroSign className="me-1" />Total : {order.total} €
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

export default AllOrders;
