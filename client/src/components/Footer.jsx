
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4">
          {/* Logo & Description */}
          <Col md={4} className="mb-4">
            <h4 className="text-primary fw-bold">Buy And Sell  <br></br>Zone</h4>
            <p>
              
             "Achetez et vendez tout ce que vous voulez, facilement, au meilleur prix et avec une qualité garantie. Bienvenue dans votre zone de confiance!"
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={6} className="mb-4">
  <h6 className="text-uppercase fw-semibold mb-3">Quick Links</h6>
  <ul className="list-unstyled d-flex justify-content-center">
    <li className="mx-3"><a href="/" className="text-light text-decoration-none">Home</a></li>
    <li className="mx-3"><a href="/about" className="text-light text-decoration-none">About</a></li>
    <li className="mx-3"><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
    <li className="mx-3"><a href="/profile" className="text-light text-decoration-none">Profile</a></li>
  </ul>
</Col>


          {/* Newsletter */}
          <Col md={2} className="mb-4">
            {/* <h6 className="text-uppercase fw-semibold mb-3">Subscribe to our newsletter</h6>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Enter your email" className="me-2" />
              <Button variant="primary">Subscribe</Button>
            </Form> */}
            {/* Social Icons */}
            <div className="mt-4 d-flex gap-3">
              <a href="#" className="text-light"><FaFacebookF /></a>
              <a href="#" className="text-light"><FaTwitter /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
              <a href="#" className="text-light"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Laamiri Yassine . All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
