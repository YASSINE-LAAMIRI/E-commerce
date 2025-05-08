import React, { useState } from 'react'
import { Button, Form ,Container, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { login } from '../JS/actions/authAction'
import Loading from '../components/Loading'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {


  const[user,setUser]= useState({
    email:"",
    password:""
  })
const dispatch= useDispatch()
const navigate = useNavigate()
const isLoad = useSelector(state=>state.authReducer.isLoad)
const handleChange=(e) => {
  setUser({...user,[e.target.name]:e.target.value})
}
const handleLogin=(e)=>{

 e.preventDefault()
  dispatch(login(user,navigate))
}
  return (
    <div className='container m-4'>
{" "}
{isLoad && <Loading/>}
{/* <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3">
       
        <Form.Control type="email" placeholder="Enter email" name='email' value={user.email}onChange={handleChange} />
     
      </Form.Group>

      <Form.Group className="mb-3" >

        <Form.Control type="password" placeholder="Password" name='password' value={user.password}onChange={handleChange}/>
      </Form.Group>
    <p>Nouveau client ? <a href='/register'>S'inscrire</a> maintenant</p>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form> */}




<Form onSubmit={handleLogin}>
  <Container className="d-flex justify-content-center" style={{ marginTop: '120px' }}>
    <Card className="p-4 shadow rounded" style={{ width: '100%', maxWidth: '400px' }}>
      <h3 className="text-center mb-4">Connexion</h3>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Entrez votre email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="rounded-pill"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="rounded-pill"
        />
      </Form.Group>

      <p className="text-center mb-3">
        Nouveau client ? <a href="/register">S'inscrire</a> maintenant
      </p>

      <div className="d-grid">
        <Button variant="primary" type="submit" className="rounded-pill">
          <FaSignInAlt className="me-2" />
          Se connecter
        </Button>
      </div>
    </Card>
  </Container>
</Form>




    </div>
  )
}

export default Login