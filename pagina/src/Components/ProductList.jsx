import React from 'react';
import { data } from '../data';  

export const ProductList = () => {
    return (
        <div className='container-items'>
            {data.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.urlImage} alt={product.nameProduct} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                        <p className='price'>${product.price}</p>
                        <button>Añadir a favoritos</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
