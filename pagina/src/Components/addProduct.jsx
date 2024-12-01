import axios from 'axios';
import React, { useState } from 'react';

export default function AddProduct() {
  const [nameProduct, setName] = useState("");
  const [description, setDescription] = useState("");
  const [urlImage, setUrlImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/app/users/add-product", { nameProduct, description, urlImage });
      alert(response.mensaje);
    } catch (error) {
      alert("No se pudo añadir");
    }
  };

  return (
    <div className="register-container">
      <h2>Añadir Raza</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nameProduct">Nombre de la raza:</label>
          <input
            type="text"
            id="nameProduct"
            value={nameProduct}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <input
            type="textarea"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="urlImage">URL de la imágen:</label>
          <input
            type="text"
            id="urlImage"
            value={urlImage}
            onChange={(e) => setUrlImg(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Añadir</button>
      </form>
    </div>
  );
}
