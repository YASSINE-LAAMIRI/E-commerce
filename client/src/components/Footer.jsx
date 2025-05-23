import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="mb-4">
          {/* Logo & Description */}
          <Col md={5} className="mb-4">
            <h4 className="fw-bold">Buy And Sell<br />Zone</h4>
            <p>
              "Achetez et vendez tout ce que vous voulez, facilement, au meilleur prix et avec une qualité garantie.
              Bienvenue dans votre zone de confiance !"
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h6 className="text-uppercase fw-semibold mb-4">Liens utiles</h6>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="/" className="text-light text-decoration-none footer-link">Accueil</a></li>
              <li><a href="/contactez-nous" className="text-light text-decoration-none footer-link">Contact</a></li>
              <li><a href="/profile" className="text-light text-decoration-none footer-link">Profil</a></li>
            </ul>
          </Col>

          {/* Social Icons */}
          <Col md={3} className="mb-4">
            <h6 className="text-uppercase fw-semibold mb-3">Suivez-nous</h6>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Laamiri Yassine. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
