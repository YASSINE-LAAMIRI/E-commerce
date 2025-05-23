import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Badge
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../JS/actions/authAction';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import SearchBar from '../SearchBar';

// ... autres imports

const NavBars = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false); // mise a jour

  const { isAuth, user } = useSelector((state) => state.authReducer);
  const cartItems = useSelector((state) => state.cartReducer.cartItems || []);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleNavigate = (path) => {
    navigate(path);
    setExpanded(false); // permet de ferme le menu
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      expanded={expanded} //  contrôlé par l'état
      onToggle={() => setExpanded(!expanded)} //  mis à jour automatiquement
      className="shadow-sm px-4 py-3 sticky-top"
    >
      <Container fluid>
        <Navbar.Brand
          onClick={() => handleNavigate('/')}
          className="d-flex align-items-center"
          style={{ cursor: 'pointer' }}
        >
          <img src={logo} alt="Logo" width={90} height={60} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link onClick={() => handleNavigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/contactez-nous')}>Contact</Nav.Link>

            {user?.isAdmin && (
              <NavDropdown title="Admin" id="admin-dropdown" className="ms-2">
                <NavDropdown.Item onClick={() => handleNavigate('/admin')}>Admin Panel</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate('/admin/orders')}>All Orders</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>

          <div className="mx-auto pt-3" style={{ maxWidth: '500px', width: '100%' }}>
            <SearchBar />
          </div>

          <Nav className="d-flex align-items-center gap-3">
            {isAuth && (
              <Nav.Link onClick={() => handleNavigate('/cart')} className="position-relative">
                <FaShoppingCart size={22} />
                {cartItemCount > 0 && (
                  <Badge
                    pill
                    bg="danger"
                    className="position-absolute top-0 start-100 translate-middle"
                    style={{ fontSize: '0.7rem', padding: '4px 6px' }}
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Nav.Link>
            )}

            {isAuth ? (
              <NavDropdown
                title={<span className="text-primary text-capitalize">{user?.name}</span>}
                id="user-dropdown"
              >
                <NavDropdown.Item onClick={() => handleNavigate('/profile')}>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate('/Editprofile/')}>Edit Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigate('/myorders')}>My Orders</NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    dispatch(logout(navigate));
                    setExpanded(false);
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link onClick={() => handleNavigate('/login')}>Login</Nav.Link>
                <Nav.Link onClick={() => handleNavigate('/register')}>Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
