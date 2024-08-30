import React, { useState, useEffect } from 'react';
import axios from "axios";

export const ProductList = ({ allProducts, setAllProducts }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const respuesta = await axios.get("http://localhost:3000/users/productos");
                setData(respuesta.data);
            } catch (error) {
                console.log("Error");
            }
        };
        fetchdata();
    }, []);

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    };

    const onAddProducts = () => {
        console.log('Add');
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
                        <button className='btn-info' onClick={() => onAddProducts()}>
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
                        {/* Más detalles del perro */}
                        <p>{selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
