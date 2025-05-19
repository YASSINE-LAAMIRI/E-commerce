import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../JS/actions/authAction'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import { FaSignInAlt } from 'react-icons/fa'

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
    <div className='container'>
      {" "}
      {isLoad && <Loading/>}
    
{/* <div className="d-flex justify-content-center align-items-center vh-100 bg-light" > */}
  <div  >
    <Form onSubmit={handleRegister} style={{ margin: '120px' }} >
      <h3 className="text-center mb-5">Créer votre compte</h3>

      <Form.Group className="text-center mb-4 mb-3">
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

     <div className="d-grid">
             <Button variant="primary" type="submit" className="rounded-pill">
               <FaSignInAlt className="me-2" />
        S'inscrire
      </Button>
       </div>
    </Form>
  </div>
</div>


    // </div>
  )
}

export default Register