import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Form, FormControl, ListGroup, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
//
const SearchBar = () => {
  const products = useSelector((state) => state.productReducer.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const wrapperRef = useRef();

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleProductClick = (productId) => {
    navigate(`/prod/${productId}`);
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="position-relative w-100 w-md-50 mx-auto my-2"
      style={{ maxWidth: "500px" }}
    >
      <Form>
        <div className="position-relative">
          <BiSearch
            className="position-absolute top-50 translate-middle-y text-muted"
            style={{ left: "15px", zIndex: 2 }}
            size={20}
          />
          <FormControl
            type="search"
            placeholder="Rechercher un produit..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ps-5 rounded-pill shadow-sm border-light"
          />
        </div>
      </Form>

      {searchTerm && (
        <ListGroup
          className="position-absolute w-100 shadow mt-1 z-3"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ListGroup.Item
                key={product._id}
                action
                onClick={() => handleProductClick(product._id)}
                className="d-flex align-items-center gap-3"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <div className="flex-grow-1">{product.title}</div>
                <div className="fw-bold text-nowrap">{product.price} $</div>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>Aucun produit trouvé.</ListGroup.Item>
          )}
        </ListGroup>
      )}
    </div>
  );
};

export default SearchBar;
