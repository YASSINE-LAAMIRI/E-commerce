

import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProd } from "../JS/actions/productAction";
import EditProduct from './EditProduct';

const Product = ({ product, all }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous supprimer ce produit ?")) {
      dispatch(deleteProd(product._id));
    }
  };

  return (
    <div style={{ margin: "3px", padding: "3px" }}>
      <Card className="h-100" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} alt={product.title}/>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}$</Card.Text>

          {all ? (
            <div className="mt-auto">
              <Link to={`/prod/${product._id}`}>
                <Button variant="dark" style={{ width: '100%' }}>Voir détails</Button>
              </Link>
            </div>
          ) : (
            <>
              <Button
                variant="outline-danger"
                onClick={handleDelete}
                style={{ marginBottom: "10px" }}
              >
                Delete
              </Button>
              <EditProduct product={product} />
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
