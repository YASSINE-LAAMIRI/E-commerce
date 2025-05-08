import React from 'react';
import { useState } from 'react';
import {  Button, Card } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import UserDetails from './UserDetails';


const User = ({ user }) => {
  const [details,setDetails]=useState(false)
  return (
    <div>     
     
     <Card style={{ width: '18rem', position: 'relative' }} >
      <Card.Img variant="top" src="https://via.placeholder.com/150x100" />

         {/* Icône de poubelle fine en haut à droite */}
         <FaTrashAlt 
        className="delete-icon"
        
        title="Supprimer"
      />
      
   

      <Card.Body>
        
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text>{user.phone}</Card.Text>

        <Button variant="primary" onClick={()=>(setDetails(true))}>Details</Button>

      </Card.Body>
    </Card>
    <UserDetails show={details} handleClose={() => setDetails(false)} userId={user._id} />




    </div>
  );
};

export default User;
