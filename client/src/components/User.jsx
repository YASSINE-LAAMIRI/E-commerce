import React from 'react';
import { useState } from 'react';
import {  Button, Card } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import UserDetails from './UserDetails';
import ToSupp from './ToSupp';
import { getOneUser } from '../JS/actions/userAction';
import { useDispatch } from 'react-redux';


const User = ({ user }) => {
  const [details,setDetails]=useState(false)
  const [supprimer,setSupprimer]=useState(false)
  const dispatch = useDispatch()
  return (
    <div>     
     
     <Card style={{ width: '18rem', position: 'relative' }} >
      <Card.Img variant="top" src="https://via.placeholder.com/150x100" />

         {/* Icône de poubelle */}
         <FaTrashAlt 
        className="delete-icon"
        
        title="Supprimer" onClick={()=>{
          setSupprimer(true)
        }}
      />
      
   

      <Card.Body>
        
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text>{user.phone}</Card.Text>

        <Button variant="primary"
         onClick={()=>{setDetails(true);
        dispatch(getOneUser(user._id))
        }}>Voir détails</Button>

      </Card.Body>
    </Card>
    <UserDetails  
    show={details} 
    handleClose={() => setDetails(false)} 
    userId={user._id} />


      <ToSupp show={supprimer}
       handleClose = {()=>{setSupprimer(false)} }
      user = {user}/>

    </div>
  );
};

export default User;
