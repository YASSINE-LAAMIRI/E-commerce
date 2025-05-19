
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders, updateOrderStatus } from '../JS/actions/orderAction';
import { Container, Row, Col, Card, Badge, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { FaBoxOpen, FaCalendarAlt, FaEuroSign, FaTruck } from 'react-icons/fa';

const AllOrders = () => {
  const dispatch = useDispatch();
  const { orders = [], isLoad = false } = useSelector(state => state.orderReducer || {});
  const [statusUpdate, setStatusUpdate] = useState({});

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  // Initialise les statuts dans state local dès que les commandes arrivent
  useEffect(() => {
    if (orders.length > 0) {
      const initialStatus = {};
      orders.forEach(order => {
        if (order && order._id) {
          initialStatus[order._id] = order.status || 'In preparation';
        }
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

  // Trie les commandes par date décroissante
  const sortedOrders = [...orders].filter(order => order && order._id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center fw-bold">📦 Toutes les commandes</h2>

      {isLoad ? (
        <div className="text-center mt-5">
          <Spinner animation="border" />
          <p className="mt-3">Chargement des commandes...</p>
        </div>
      ) : sortedOrders.length === 0 ? (
        <Alert variant="info" className="text-center">Aucune commande trouvée.</Alert>
      ) : (
        <Row>
          {sortedOrders.map(order => (
            <Col key={order._id.toString()} md={6} lg={4} className="mb-4">
              <Card className="shadow border-2 h-100">
                <Card.Header className="bg-white border-bottom-0 d-flex justify-content-between align-items-center">
                  <span className="fw-bold">
                    <FaBoxOpen className="me-2 text-primary" />
                    Commande n°{order._id ? order._id.toString().slice(-6) : 'Inconnue'}
                  </span>
                  <Badge bg={getStatusColor(order.status)} className="text-uppercase">
                    {statusLabels[order.status] || order.status || 'Statut inconnu'}
                  </Badge>
    
                </Card.Header>

                <Card.Body>
                                 <div className="mb-2 text-muted small">
    <strong>👤Client : </strong> {order.user ? order.user.name : 'Inconnu'}
  </div>
                  <div className="mb-2 text-muted small">
                    <FaCalendarAlt className="me-2" />
                    Commandée le : {order.createdAt ? new Date(order.createdAt).toLocaleDateString('fr-FR') : 'Date inconnue'}
                  </div>

                  <div className="mb-2 text-muted small">
                    <FaTruck className="me-2" />
                    Livraison à : <span className="fw-semibold text-dark">{order.shippingAddress || 'Adresse inconnue'}</span>
                  </div>

                  <hr />

                  <div className="mb-2 fw-bold">Mise à jour du statut :</div>
                  <Form.Select
                    value={statusUpdate[order._id] || 'In preparation'}
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
                    <FaEuroSign className="me-1" />
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

export default AllOrders;
