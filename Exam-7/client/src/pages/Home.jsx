import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../store/productslice';

const Home = () => {
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="container">
            {products.map((item) => (
                <div className="product-card" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h2 className="product-title">{item.title}</h2>
                    <p className="product-description">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;