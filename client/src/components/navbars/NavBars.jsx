// import React from 'react';
// import { Navbar, Nav, Container, Form, FormControl, NavDropdown } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../JS/actions/authAction';
// import { useNavigate } from 'react-router-dom';
// import { FaStore, FaShoppingCart, } from 'react-icons/fa';

// import logo from '../../assets/logo.png';

// const NavBars = () => {
//   const isAuth = useSelector((state) => state.authReducer.isAuth);
//   const user = useSelector((state) => state.authReducer.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   return (
//     <Navbar bg="white" expand="lg" className="shadow-sm px-4 py-3">
//       <Container fluid>
//         {/* Logo */}
//         {/* <Navbar.Brand href="/" className="d-flex align-items-center text-primary fw-bold fs-4">
//           <FaStoreAltSlash className="me-2" />
//           Buy and Sell
//         </Navbar.Brand> */}

//         <img src={logo} alt="Logo" width={100} height={80} href="/"/>

//         {/* Toggle for mobile */}
//         <Navbar.Toggle aria-controls="navbarScroll" />

//         <Navbar.Collapse id="navbarScroll">
//           {/* Categories */}
//           <Nav className="me-auto my-2 my-lg-0">
//             {/* <Nav.Link href="#" className="d-flex align-items-center text-dark fw-medium">
//               Categories <FiChevronDown className="ms-1" />
//             </Nav.Link> */}
//             <NavDropdown title="Categories" id="navbarScrollingDropdown" className="d-flex align-items-center text-dark fw-medium">
//             <NavDropdown.Item href="#">Femme</NavDropdown.Item>
//             <NavDropdown.Item href="#">Enfant</NavDropdown.Item>
//             <NavDropdown.Item href="#">Homme</NavDropdown.Item>
//             </NavDropdown>

//           </Nav>

//           {/* Search bar */}
//           <Form className="d-flex me-3" style={{ maxWidth: '300px', width: '100%' }}>
//             <FormControl
//               type="search"
//               placeholder="Search products..."
//               className="me-2 rounded-pill"
//               aria-label="Search"
//             />
//           </Form>

//           {/* Right side: Auth / Cart */}
//           <Nav className="d-flex align-items-center gap-3">
//             <Nav.Link href="#" className="text-dark d-flex align-items-center">
//               <FaShoppingCart className="me-1" />
//               Cart
//             </Nav.Link>
//             <Nav.Link href="/">Home</Nav.Link>

//             {isAuth ? (
//               <>
//                 <Nav.Link href="/profile">Profile</Nav.Link>
//                 {user?.isAdmin && <Nav.Link href="/admin">Admin Panel</Nav.Link>}
//                 <Nav.Link href="#" onClick={() => dispatch(logout(navigate))}>
//                   Logout
//                 </Nav.Link>
//               </>
//             ) : (
//               <>
//                 <Nav.Link href="/login">Login</Nav.Link>
//                 <Nav.Link href="/register">Register</Nav.Link>
//               </>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavBars;


// export default NavBars


// import React from 'react';
// import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
// import { FaStore, FaShoppingCart } from 'react-icons/fa';
// import { FiChevronDown } from 'react-icons/fi';

// const Navbars = () => {
//   return (
//     <Navbar bg="white" expand="lg" className="shadow-sm px-4 py-3">
//       <Container fluid>
//         {/* Logo */}
//         <Navbar.Brand href="#" className="d-flex align-items-center text-primary fw-bold fs-4">
//           <FaStore className="me-2" />
//           ShoeP
//         </Navbar.Brand>

//         {/* Collapse toggle */}
//         <Navbar.Toggle aria-controls="navbarScroll" />

//         <Navbar.Collapse id="navbarScroll">
//           {/* Categories */}
//           <Nav className="me-auto my-2 my-lg-0">
//             <Nav.Link href="#" className="d-flex align-items-center text-dark fw-medium">
//               Categories <FiChevronDown className="ms-1" />
//             </Nav.Link>
//           </Nav>

//           {/* Search bar */}
//           <Form className="d-flex me-3" style={{ maxWidth: '300px', width: '100%' }}>
//             <FormControl
//               type="search"
//               placeholder="Search products..."
//               className="me-2 rounded-pill"
//               aria-label="Search"
//             />
//           </Form>

//           {/* Cart & Login */}
//           <Nav className="d-flex align-items-center gap-3">
//             <Nav.Link href="#" className="text-dark d-flex align-items-center">
//               <FaShoppingCart className="me-1" />
//               Cart
//             </Nav.Link>
//             <Nav.Link href="#" className="text-dark">Login</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };


// export default Navbars;
import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  NavDropdown,
  Badge
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../JS/actions/authAction';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const NavBars = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, user } = useSelector((state) => state.authReducer);
  const cartItems = useSelector((state) => state.cartReducer.cartItems || []);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) navigate(`/search?query=${searchTerm}`);
  };

  const handleCategoryClick = (category) => {
    navigate(`/?category=${category}`);
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-4 py-3 sticky-top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand onClick={() => navigate('/')} className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
          <img src={logo} alt="Logo" width={90} height={60} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Left side: Categories */}
          <Nav className="me-auto my-2 my-lg-0">
            
             
             <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate('/contactez-nous')}>Contact</Nav.Link>
            {/* <NavDropdown title="Categories" id="categories-dropdown">
              {['All', 'Femme', 'Enfant', 'Homme'].map((cat) => (
                <NavDropdown.Item key={cat} onClick={() => handleCategoryClick(cat)}>
                  {cat}
                </NavDropdown.Item>
              ))}
            </NavDropdown> */}
          </Nav>

          {/* Middle: Search Bar */}
          <Form className="d-flex me-3 w-100" onSubmit={handleSearch} style={{ maxWidth: 400 }}>
            <FormControl
              type="search"
              placeholder="Search products..."
              className="rounded-pill shadow-sm"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>

          {/* Right side: Cart + Auth */}
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
          
             <NavDropdown title={<span className="text-primary text-capitalize">{user?.name}</span>}
               id="user-dropdown">
                
                <NavDropdown.Item onClick={() => navigate('/profile')}>Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/myorders')}>My Orders</NavDropdown.Item>

                {user?.isAdmin && (
                  <>
                  <NavDropdown.Item  onClick={() => navigate('/admin')}>Admin Panel</NavDropdown.Item>
                  <NavDropdown.Item  onClick={() => navigate('/admin/orders')}>All Orders</NavDropdown.Item>
                  </>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => dispatch(logout(navigate))}>Logout</NavDropdown.Item>
              </NavDropdown>
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
