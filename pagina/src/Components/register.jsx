import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link

export default function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const registro = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      try {
        const response = await axios.post("/app/users/registrar", { name, password });
        alert(response.data.mensaje);
      } catch (error) {
        alert("No se pudo crear la cuenta");
      }
    } else {
      alert("Las contraseñas no son iguales");
    }
  };

  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={registro}>Registrarse</button>
        <div className="account-message">
          <span>¿Ya tienes cuenta?</span> 
          <Link to="/login">Iniciar sesión</Link> {/* Cambiar el enlace a Link */}
        </div>
      </form>
    </div>
  );
}
