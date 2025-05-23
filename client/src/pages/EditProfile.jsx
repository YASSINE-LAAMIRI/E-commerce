import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../JS/actions/userAction';
import { Button, Form, Container, Spinner, Toast, ToastContainer } from 'react-bootstrap';

const EditProfile = () => {
  const dispatch = useDispatch();

  const { user, errors, success, isLoad } = useSelector((state) => state.authReducer);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState(''); // success | danger

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        password: ''
      });
    }
  }, [user]);

  useEffect(() => {
    if (success) {
      setToastVariant('success');
      setToastMessage(success.msg || success);
      setShowToast(true);
      dispatch({ type: 'CLEAR_MESSAGES' });
    }
    if (errors) {
      setToastVariant('danger');
      const msg = Array.isArray(errors) ? errors[0] : errors.msg || errors;
      setToastMessage(msg);
      setShowToast(true);
      dispatch({ type: 'CLEAR_MESSAGES' });
    }
  }, [success, errors, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  return (
    <Container style={{ maxWidth: '500px', marginTop: '60px' }}>
      <h2 className="mb-4 text-center">Modifier mon profil</h2>

      {isLoad && (
        <div className="text-center mb-3">
          <Spinner animation="border" variant="dark" />
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Nouveau mot de passe (facultatif)</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Laisser vide pour ne pas changer"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="dark" className="w-100" disabled={isLoad}>
          {isLoad ? 'Mise à jour...' : 'Enregistrer'}
        </Button>
      </Form>

      {/* ✅ Toast flottant */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showToast}
          bg={toastVariant}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Profil</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default EditProfile;
