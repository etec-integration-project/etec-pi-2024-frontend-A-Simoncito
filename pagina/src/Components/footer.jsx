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
        setRating(respuesta.data);
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
        const respuesta = await axios.post("/app/users/calificar", JSON.stringify({ rating: rating }));
        console.log(respuesta);
        alert(respuesta);
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
      const response = await axios.post("/app/users/soporte", { email, content });
      alert(response.data);
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
          <button onClick={openDialog} className="btn-contact">Contáctanos</button>
          <dialog ref={dialogRef}>
            <form>
                <h2>Contáctanos</h2>
                <label htmlFor="supportEmail">Email:</label>
                <input
                  type="email"
                  id="supportEmail"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required/>
                <br/>
                <label htmlFor="content">Contenido:</label>
                <input
                  type="textarea"
                  id="content"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required/>
                <br/>
                <button className="btn-contact" type="submit" onClick={handleSubmit}>Enviar</button>
                <button className="btn-contact" type="button" onClick={closeDialog}>Cancelar</button>
            </form>
          </dialog>
        </div>
        <div className="footer-social">
          <h2>Síguenos en las redes sociales</h2>
          <ul>
            <li><a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com/tuempresa" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li>{rating}⭐ <span><button className='btn-contact' onClick={calificar}>Calificanos</button></span></li>
          </ul>
        </div>
      </div>
      <p>&copy; 2025 Perrédex. Todos los derechos reservados.</p>
    </footer>
  );
};
