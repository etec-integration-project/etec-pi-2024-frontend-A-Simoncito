// src/Components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ allProducts, favorites, removeFromFavorites }) => {
    const [active, setActive] = React.useState(false);

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

            <div>
                <Link to="/register" className="btn-login">Iniciar Sesión | Registrarse</Link>
            </div>
        </header>
    );
};
