import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../JS/actions/userAction'

const ToSupp = ({show, handleClose, user}) => {
    const dispatch = useDispatch()
    const handelDelete = ()=>{
        dispatch(deleteUser(user._id))
        handleClose()
    }
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign:"center"}}>Confirmer la suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>Etes vous sure de vouloire supprimer <strong style={{color:"red"}}>{user.name}</strong > ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handelDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ToSupp