import React, { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="container mx-auto mt-10 p-4">
            <h1 className="text-3xl font-bold  text-center">Welcome to Home Page</h1>

            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg shadow-md p-4">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-40 object-cover rounded-md"
                            />
                            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                            <p className="text-gray-600 mt-1">${product.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-4">Loading products...</p>
            )}
        </div>
    );
};

export default Home;
