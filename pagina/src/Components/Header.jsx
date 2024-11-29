// src/Components/Header.jsx

import React from 'react';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function getCookie(name) {
    const cookies = document.cookie.split('; ')
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=')
        if (key === name) {
            return decodeURIComponent(value)
        }
    }
    return null
}

export const Header = ({ allProducts, favorites, removeFromFavorites }) => {
    const [active, setActive] = useState(false);
    const [cookie, setCookie] = useState(null)
    
    useEffect(() => {
        setCookie(getCookie('escudero-app'))
    }, [])
    
    const logout = async () => {
        const res = await axios.post('/app/users/logout', {});
        alert(res.data.message);
    };

    return (
        <header>
            <Link to="/" className="header-title">
                <h1>Perrédex</h1>
            </Link>

            <div className="container-icon">
                <div
                    className="container-cart-icon"
                    onClick={() => setActive(!active)}
                >
                    <span className="text-favoritos">Favoritos</span>
                    <div className="count-products">
                        <span id="contador-productos">{favorites.length}</span>
                    </div>
                </div>

                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    {favorites.length ? (
                        favorites.map(product => (
                            <div key={product.id} className="row-product">
                                <div className="cart-product">
                                    <div className="info-cart-product">
                                        <p className="titulo-producto-carrito">{product.nameProduct}</p>
                                        <span className="remove-from-favorites" onClick={() => removeFromFavorites(product.id)}>✕</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="cart-empty">No tienes favoritos</p>
                    )}
                </div>
            </div>

            

            {cookie && (
                <>
                    <div>
                        <Link to="/profile" className="btn-login">Perfil</Link>
                    </div>
                    <div>
                        <Link to="/add-product" className="btn-login">Añadir Producto</Link>
                    </div>
                    <div>
                        <button onClick={logout} className="btn-contact">Logout</button>
                    </div>
                </>
            ) || (
                <div>
                    <Link to="/register" className="btn-login">Iniciar Sesión | Registrarse</Link>
                </div>
            )}

        </header>
    );
};
