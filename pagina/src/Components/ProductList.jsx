import React from 'react';
import { data } from '../data';  

export const ProductList = ({ allProducts, setAllProducts }) => {
    const onAddProducts = () => {
        console.log('Add')
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
                        <p className='price'>${product.price}</p>
                        <button onClick={() => onAddProducts ()}>
                            Añadir a favoritos
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
