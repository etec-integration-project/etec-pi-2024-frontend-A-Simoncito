import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ allProducts, setAllProducts }) => {
    const [active, setActive] = useState(false);

    return (
        <header>
            <h1>Perrédex</h1>

            <div className="container-icon">
                <div
                    className="container-cart-icon"
                    onClick={() => setActive(!active)}
                >
                    <span className="text-favoritos">Favoritos</span>
                    <div className="count-products">
                        <span id="contador-productos">0</span>
                    </div>
                </div>

                <div className={`container-cart-products ${active ? '' : 'hidden-cart'}`}>
                    {allProducts.length ? (
                        <>
                            <div className="row-product hidden">
                                <div className="cart-product">
                                    <div className="info-cart-product">
                                        <span className="cantidad-producto-carrito">1</span>
                                        <p className="titulo-producto-carrito">Zapatos Nike</p>
                                        <span className="precio-producto-carrito">$80</span>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-total hidden">
                                <h3>Total:</h3>
                                <span className="total-pagar">$200</span>
                            </div>
                        </>
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
