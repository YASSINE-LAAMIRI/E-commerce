import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editProd } from '../JS/actions/productAction';
import { useDispatch } from 'react-redux';

function EditProduct({product}) {
//-----------------------botstrap----------------------

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//  -------------bootstrap-----------------------------------
 const dispatch = useDispatch();  // Pour envoyer l'action Redux
const [prodtoEdit,setProdtoEdit] = useState({
    title: product.title,
    description: product.description,
    price: product.price,
    image: product.image,
  //category: product.category,
  quantity: product.quantity,
})
console.log(prodtoEdit)
const handleChange = (e) => {
  setProdtoEdit({...prodtoEdit,
    [e.target.name]:e.
    target.value})
}
const handleEdit = (e) => {
  e.preventDefault();
  dispatch(editProd(product._id,prodtoEdit))
  handleClose();
}

// <-- Ceci va mettre à jour les champs quand product change
  // useEffect(() => {
  //   if (product) {
  //     setProdtoEdit({
  //       title: product.title || '',
  //       description: product.description || '',
  //       price: product.price || '',
  //       image: product.image || '',
  //       quantity: product.quantity || '',
  //     });
  //   }
  // }, [product]);
  
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier votre article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              {/* // Formulaire d'ajout de produit */}

 <Form>
  <Form.Group className="mb-3">
    <Form.Control
      type="text"
      placeholder="Titre..."
      name="title"
      value={prodtoEdit.title}
      onChange={handleChange}
    />
    <Form.Control
      type="text"
      placeholder="L'URL de l'image..."
      name="image"
      value={prodtoEdit.image}
      onChange={handleChange}
    />

     <Form.Control
      type="text"
      placeholder="Category..."
      name="category"
      value={prodtoEdit.category}
      onChange={handleChange}
    />

    <Form.Control
      type="text"
      placeholder="Description..."
      name="description"
      value={prodtoEdit.description}
      onChange={handleChange}
    />
    <Form.Control
      type="number"
      placeholder="Prix..."
      name="price"
      value={prodtoEdit.price}
      onChange={handleChange}
    />
    <Form.Control
      type="number"
      placeholder="Quantité..."
      name="quantity"
      value={prodtoEdit.quantity}
      onChange={handleChange}/>
  </Form.Group>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default EditProduct