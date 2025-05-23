import React, { useState } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../JS/actions/authAction'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { FaSignInAlt } from 'react-icons/fa'

const Register = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoad = useSelector(state => state.authReducer.isLoad)

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    dispatch(register(newUser, navigate))
  }

  return (
    <Container className="py-5">
      {isLoad && <Loading />}

      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <div className="p-4" style={{ backgroundColor: 'transparent', color: 'inherit' }}>
            <h3 className="text-center mb-4">Créer votre compte</h3>

            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Entrez votre nom"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  className="rounded-pill"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Entrez votre email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  className="rounded-pill"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  value={newUser.password}
                  onChange={handleChange}
                  className="rounded-pill"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Téléphone"
                  name="phone"
                  value={newUser.phone}
                  onChange={handleChange}
                  className="rounded-pill"
                  required
                />
              </Form.Group>

              <div className="text-center mb-3">
                <p>
                  Vous êtes déjà client ? <a href="/login">Connectez-vous</a>
                </p>
              </div>

              <div className="d-grid">
                <Button variant="primary" type="submit" className="rounded-pill">
                  <FaSignInAlt className="me-2" />
                  S'inscrire
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
