import axios from 'axios';
import React, { useState } from 'react';

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", { username: name, password });
      alert("Inicio de sesión exitoso");
      // Aquí podrías redirigir al usuario a otra página, por ejemplo, a la página principal.
      // window.location.href = "/";
    } catch (error) {
      alert("No se pudo iniciar sesión");
    }
  };

  return (
    <div className="register-container">
      <h2>Iniciar Sesión</h2>
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
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={iniciarSesion}>Iniciar Sesión</button>
      </form>
    </div>
  );
}
