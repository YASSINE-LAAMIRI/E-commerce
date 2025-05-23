import React from 'react';
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

const NavBars = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, user } = useSelector((state) => state.authReducer);
  const cartItems = useSelector((state) => state.cartReducer.cartItems || []);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-4 py-3 sticky-top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand
          onClick={() => navigate('/')}
          className="d-flex align-items-center"
          style={{ cursor: 'pointer' }}
        >
          <img src={logo} alt="Logo" width={90} height={60} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Left side: Links */}
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/contactez-nous')}>Contact</Nav.Link>
              {/* Admin Dropdown  */}
                {user?.isAdmin && (
                  <NavDropdown
                    title={<span className="text">Admin</span>}
                    id="admin-dropdown"
                    className="ms-2"
                  >
                    {/* <NavDropdown.Header>Admin</NavDropdown.Header> */}
                    <NavDropdown.Item onClick={() => navigate('/admin')}>Admin Panel</NavDropdown.Item>
                    {/* <NavDropdown.Item onClick={() => navigate('/admin/users')}>All Users</NavDropdown.Item> */}
                    <NavDropdown.Item onClick={() => navigate('/admin/orders')}>All Orders</NavDropdown.Item>
                  </NavDropdown>
                )}
          </Nav>

          {/* Search Bar */}
          <div className="mx-auto pt-3" style={{ maxWidth: '500px', width: '100%' }}>
            <SearchBar />
          </div>

          {/* Right side: Cart + User */}
          <Nav className="d-flex align-items-center gap-3">
            {isAuth && (
              <Nav.Link onClick={() => navigate('/cart')} className="position-relative">
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
              <>
                {/* Profile Dropdown */}
                <NavDropdown
                  title={<span className="text-primary text-capitalize">{user?.name}</span>}
                  id="user-dropdown">                 
                  <NavDropdown.Item onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/Editprofile/')}>Edit Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate('/myorders')}>My Orders</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => dispatch(logout(navigate))}>Logout</NavDropdown.Item>
                </NavDropdown>

            
              </>
            ) : (
              <>
                <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                <Nav.Link onClick={() => navigate('/register')}>Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
