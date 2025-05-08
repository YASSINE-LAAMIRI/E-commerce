import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
//importer l'image
import homeIcon from '../../assets/home.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../JS/actions/authAction';
import { useNavigate } from 'react-router-dom';




const NavBars = () => {
  const isAuth=useSelector(state=>state.authReducer.isAuth)
  const user=useSelector(state=>state.authReducer.user)
  const dispatch= useDispatch()
  const navigate = useNavigate()


  return (
    <div>

<Navbar   bg="light" data-bs-theme="light"  >
        <Container >
          <Navbar.Brand href="/">
          <img src={homeIcon} alt='home' width={50} height={40}/>
          
          
          </Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link  href="/">Home</Nav.Link>
            {isAuth?
            (<>
              <Nav.Link href="/profile">Profile</Nav.Link>

              {/* {user?.isAdmin && <Nav.Link to="/admin">Admin Panel</Nav.Link>} */}

              {/* {user.isAdmin &&  <Nav.Link href="/admin">Admin Panel</Nav.Link>  }           */}
              <Nav.Link href="#"onClick={()=>dispatch(logout(navigate))}>Logout</Nav.Link> 
              </>
              ):(<>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">register</Nav.Link>
            </>
              )}
            
               {user.isAdmin &&  <Nav.Link href="/admin">Admin Panel</Nav.Link>  }                
          </Nav>
        </Container>
      </Navbar>
        

    </div>
  )
}

export default NavBars