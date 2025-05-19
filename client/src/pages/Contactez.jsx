import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookMessenger, FaHeadset } from 'react-icons/fa';

const Contactez = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">COMMENT POUVONS-NOUS VOUS AIDER ?</h3>

      <p className="text-center mb-5">
  Notre équipe est là pour vous accompagner et répondre à toutes vos questions concernant l’utilisation de notre site. 
  Que ce soit pour une commande, un produit ou une assistance technique, notre support en ligne est à votre écoute. 
  Contactez-nous, nous sommes là pour vous aider à vivre la meilleure expérience possible !
</p>


      <div className="row text-center">
        {/* Email */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <FaEnvelope size={40} className="text-primary mb-3" />
              <h5 className="card-title">Par Email</h5>
              <p className="card-text">
                <a href="mailto:decathlon.tunisie@decathlon.com" className="text-decoration-none">
                  yassine@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Téléphone */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <FaHeadset size={40} className="text-primary mb-3" />
              <h5 className="card-title">Par Téléphone</h5>
              <p className="card-text">
                <a href="tel:+21631222222" className="text-decoration-none">
                  31 222 222
                </a>
              </p>
              
            </div>
          </div>
        </div>

        {/* Messenger */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <FaFacebookMessenger size={40} className="text-info mb-3" />
              <h5 className="card-title">Par Messenger</h5>
              <p className="card-text">
                <a href="https://m.me/DecathlonTunisie" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  Contactez-nous sur Messenger
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p  style={{color:"blue"}}><strong >Horaires :</strong> Lundi - Samedi : 9h00 - 19h00</p>
      </div>
    </div>
  );
};

export default Contactez;
