import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../JS/actions/authAction'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'

const Register = () => {

  const [newUser,setNewUser] = useState(
//initialisation ou objet vide 
    {
      name:"",
      email:"",
      password:"",
      phone:"",
    }

  )
  const dispatch = useDispatch()
  const navigate  = useNavigate()
  const isLoad = useSelector(state=>state.authReducer.isLoad)
  // pour mettre la saisie dans le state 
  const handleChange = (e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value});
  }
  //console.log(newUser)


const handleRegister = (e)=>{
  // arreter le chargement de la page avec  e.preventDefault()
  e.preventDefault()
  dispatch(register(newUser,navigate))

}
  return (
    <div className='container m-4'>
      {" "}
      {isLoad && <Loading/>}
        {/* <Form onSubmit={handleRegister}>

        <Form.Group className="mb-3" >       
        <Form.Control type="text" placeholder="Enter votre Nom" name="name" value={newUser.name} onChange={handleChange}/>     
      </Form.Group>

      <Form.Group className="mb-3" >       
        <Form.Control type="email" placeholder="Enter email" name="email" value={newUser.email} onChange={handleChange}/>     
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="password" placeholder="Password" name="password" value={newUser.password} onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Control type="tel" placeholder="Phone" name="phone" value={newUser.phone} onChange={handleChange}/>
      </Form.Group>

    <p>Vous êtes déja un client ? <a href='/login'>login</a> maintenant</p>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form> */}


<div className="d-flex justify-content-center align-items-center vh-100 bg-light" >
  <div className="p-4 shadow rounded bg-white" style={{ minWidth: '400px' }}>
    <Form onSubmit={handleRegister}>
      <h3 className="text-center mb-4">Créer un compte</h3>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Entrez votre nom"
          name="name"
          value={newUser.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Entrez votre email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Mot de passe"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="tel"
          placeholder="Téléphone"
          name="phone"
          value={newUser.phone}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="text-center mb-3">
        <p>
          Vous êtes déjà client ? <a href="/login">Connectez-vous</a>
        </p>
      </div>

      <Button variant="primary" type="submit" className="w-100">
        S'inscrire
      </Button>
    </Form>
  </div>
</div>


    </div>
  )
}

export default Register