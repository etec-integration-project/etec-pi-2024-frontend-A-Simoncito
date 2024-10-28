// src/Components/ProductList.jsx

import React, { useState, useEffect } from 'react';
import axios from "axios";

export const ProductList = ({ allProducts, addToFavorites }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respuesta = await axios.get("/app/users/productos");
                setData(respuesta.data);
            } catch (error) {
                console.log("Error");
            }
        };
        fetchData();
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    };

    return (
        <div className='container-items'>
            {data.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.urlImage} alt={product.nameProduct} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                        <button className='btn-info' onClick={() => openModal(product)}>
                            Info
                        </button>
                        <button className='btn-info' onClick={() => addToFavorites(product)}>
                            Añadir a favoritos
                        </button>
                    </div>
                </div>
            ))}

            {/* Modal */}
            {modalOpen && selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedProduct.nameProduct}</h2>
                        <img src={selectedProduct.urlImage} alt={selectedProduct.nameProduct} />
                        <p>{selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
