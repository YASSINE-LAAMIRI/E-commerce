import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addProduct } from '../JS/actions/productAction';

function AddProduct() {
  //-------------bootstrap modal-------------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//------------------------------------------------
const dispatch = useDispatch()
// state pour recuperer les valeurs du formulaire
// et les envoyer dans le reducer

const [newProd,setNewProd] = useState({
  title: "",
  image: "",
  description: "",
  price: "",
  quantity: "",
  category: "",
})

const handleChange = (e) => {
  setNewProd({...newProd,[e.target.name]:e.target.value})
}
const handleAddProduct =(e) => {
  e.preventDefault()
  dispatch(addProduct(newProd))
  handleClose();// fermer la boite une fois il valide
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ajouter un produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* // Formulaire d'ajout de produit */}
        <Form>
  <Form.Group className="mb-3">
    <Form.Control
      type="text"
      placeholder="Titre..."
      name="title"
      value={newProd.title}
      onChange={handleChange}
    />
    <Form.Control
      type="text"
      placeholder="L'URL de l'image..."
      name="image"
      value={newProd.image}
      onChange={handleChange}
    />

      <Form.Control
      type="text"
      placeholder="Category..."
      name="category"
      value={newProd.category}
      onChange={handleChange}
    />

    <Form.Control
      type="text"
      placeholder="Description..."
      name="description"
      value={newProd.description}
      onChange={handleChange}
    />
    <Form.Control
      type="number"
      placeholder="Prix..."
      name="price"
      value={newProd.price}
      onChange={handleChange}
    />
    <Form.Control
      type="number"
      placeholder="Quantité..."
      name="quantity"
      value={newProd.quantity}
      onChange={handleChange}/>
  </Form.Group>
</Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProduct}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default AddProduct