import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const Footer = () => {
  const [rating, setRating] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [content, setContent] = useState(''); 
  const dialogRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respuesta = await axios.get("/app/users/ratings");
        console.log(respuesta);
        setRating(respuesta.data.calificacion);
      } catch (error) {
        console.log("Error");
      }
    };
    fetchData();
  }, []);

  const calificar = async () => {
    const rating = parseInt(prompt('Califica nuestra página del 1 al 5:'));
    if (rating >= 1 && rating <= 5) {
      try {
        const respuesta = await axios.post("/app/users/rate", { rating: rating });
        console.log(respuesta);
        alert(respuesta.data.mensaje);
      } catch (error) {
        console.log("Error");
        alert(error);
      }
    } else {
      alert("Calificación inváida. Por favor ingrese un número del 1 al 5.");
    }
  };

  const openDialog = () => {
    dialogRef.current.showModal();
    setIsOpen(true);
  };

  const closeDialog = () => {
    dialogRef.current.close();
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/app/users/soporte", { email: email, content: content });
      alert(response.data.mensaje);
    } catch (error) {
      alert("No se pudo enviar el mensaje");
    }
    closeDialog();
  };

  return (
    <footer>
      <div className="footer-content">

        <div className="footer-contact">
          <h2>Contacto</h2>
          <p>Si tienes alguna pregunta sobre las razas de perros, no dudes en contactarnos.</p>
          {/* <button onClick={openDialog} className="btn-contact">Contactanos</button> */}
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
      <p>&copy; 2026 Perrédex. Todos los derechos reservados.</p>
    </footer>
  );
};
