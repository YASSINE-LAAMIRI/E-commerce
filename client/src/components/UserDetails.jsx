// import React, { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { getOneUser } from '../JS/actions/userAction'


const UserDetails = ({show, handleClose, userId}) => {
    const userToGet = useSelector((state)=>state.userReducer.user)
    //const dispatch = useDispatch()
    const {user,isLoad}= useSelector((state)=>state.userReducer)
    // useEffect(()=>{
    //     dispatch(getOneUser(userId))

    // },[dispatch,userId])
  return (
    <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Détails de l'utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {user && !isLoad && (
                <div>
                    <p>
                      <strong>Name: </strong>{userToGet.name}</p>
                     <p>
                      <strong>Email: </strong>
                      {userToGet.email}</p>
                     <p> 
                      <strong>Phone: </strong> {userToGet.phone}</p>
                 
                   
                </div>
            )}
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UserDetails