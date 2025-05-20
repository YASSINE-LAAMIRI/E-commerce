
import { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addProduct } from '../JS/actions/productAction';

function AddProduct() {
  const dispatch = useDispatch();

  const [newProd, setNewProd] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  });

  const handleChange = (e) => {
    setNewProd({ ...newProd, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(newProd));
    setNewProd({
      title: "",
      image: "",
      description: "",
      price: "",
      quantity: "",
      category: "",
    });
  };

  return (
    <Container className="my-4" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4" style={{ color: '#333' }}> <strong>Ajouter un produit</strong> </h2>
      <Form onSubmit={handleAddProduct}>
        <Form.Group className="mb-3">
          {/* <Form.Label>Titre *</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Titre du produit"
            name="title"
            value={newProd.title}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#f8f9fa', borderColor: '#ccc', color: '#333' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>URL de l'image *</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Lien vers l'image"
            name="image"
            value={newProd.image}
            onChange={handleChange}
            required
            style={{ backgroundColor: '#f8f9fa', borderColor: '#ccc', color: '#333' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>Catégorie</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Catégorie"
            name="category"
            value={newProd.category}
            onChange={handleChange}
            style={{ backgroundColor: '#f8f9fa', borderColor: '#ccc', color: '#333' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>Description</Form.Label> */}
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description du produit"
            name="description"
            value={newProd.description}
            onChange={handleChange}
            style={{ backgroundColor: '#f8f9fa', borderColor: '#ccc', color: '#333' }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {/* <Form.Label>Prix *</Form.Label> */}
          <Form.Control
            type="number"
            placeholder="Prix"
            name="price"
            value={newProd.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            style={{ backgroundColor: '#f8f9fa', borderColor: '#ccc', color: '#333' }}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          {/* <Form.Label>Quantité *</Form.Label> */}
          <Form.Control
            type="number"
            placeholder="Quantité"
            name="quantity"
            value={newProd.quantity}
            onChange={handleChange}
            required
            min="0"
            style={{ backgroundColor: '#f8f9fa', borderColor: '#ccc', color: '#333' }}
          />
        </Form.Group>

        <Button variant="secondary" type="submit" className="w-100">
         <strong>Ajouter </strong> 
        </Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
