import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact">
          <h2>Contacto</h2>
          <p>Si tienes alguna pregunta sobre las razas de perros, no dudes en contactarnos.</p>
          <a href="#" className="btn-contact">Contáctanos</a>
        </div>
        <div className="footer-social">
          <h2>Síguenos en las redes sociales</h2>
          <ul>
            <li><a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com/tuempresa" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p>&copy; 2025 Perrédex. Todos los derechos reservados.</p>
    </footer>
  );
};
