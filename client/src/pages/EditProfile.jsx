import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../JS/actions/userAction';
import { Button, Form, Container, Spinner, Alert } from 'react-bootstrap';

const EditProfile = () => {
  const dispatch = useDispatch();

  // Récupération des données auth dans le store Redux
  const { user, errors, success, isLoad } = useSelector((state) => state.authReducer);

  // Formulaire local
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // État de l’alerte (visible ou non), son message et sa couleur
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('warning'); // success | danger | warning

  // Initialiser les champs formulaire à partir de user au chargement
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        password: ''
      });
    }
  }, [user]);

  // Met à jour l’alerte quand success ou errors changent
  useEffect(() => {
    if (success) {
      setAlertVariant('success');
      setAlertMessage(success.msg || success || 'Profil mis à jour avec succès !');
      setShowAlert(true);
    } else if (errors) {
      setAlertVariant('danger');
      const msg = Array.isArray(errors) ? errors[0] : errors.msg || errors || 'Une erreur est survenue.';
      setAlertMessage(msg);
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [success, errors]);

  // Fermeture automatique de l’alerte après 4 secondes
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

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

      {/* Alerte React Bootstrap */}
      {showAlert && (
        <Alert
          variant={alertVariant}
          onClose={() => setShowAlert(false)}
          dismissible
          className="text-center fw-bold"
          aria-live="polite"
        >
          {alertMessage}
        </Alert>
      )}

      {/* Indicateur de chargement */}
      {isLoad && (
        <div className="text-center mb-3">
          <Spinner animation="border" variant="dark" />
        </div>
      )}

      {/* Formulaire */}
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

             {/* Phone */}
             <Form.Group className="mb-3">
               <Form.Label>Téléphone</Form.Label>
               <Form.Control
                 type="tel"
                 name="phone"
                 placeholder="Numéro de téléphone"
                 value={formData.phone}
                 onChange={handleChange}
                 required
               />
             </Form.Group>

        {/* Mot de passe */}

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

        <Button type="submit" variant="dark" className="w-50" disabled={isLoad}>
          {isLoad ? 'Mise à jour...' : 'Enregistrer'}
        </Button>
      </Form>
    </Container>
  );
};

export default EditProfile;
