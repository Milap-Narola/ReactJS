import React, { useState, useEffect } from 'react';
import { getFoods, createFood, updateFood, deleteFood } from './service/FoodService';
import Food from './Food';
import './App.css';

const DataFood = () => {
  const [foods, setFoods] = useState([]);
  const [formData, setFormData] = useState({ name: '', category: '', price: '' });

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    const response = await getFoods();
    setFoods(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await updateFood(formData.id, formData);
    } else {
      const newFood = await createFood(formData);
      setFoods(prevFoods => [...prevFoods, newFood]);
    }
    setFormData({ name: '', category: '', price: '' });
  };

  const handleDelete = async (id) => {
    await deleteFood(id);
    setFoods(prevFoods => prevFoods.filter(food => food.id !== id));
  };

  const handleEdit = (food) => {
    setFormData(food);
  };

  return (
    <div>
      <h1>Food CRUD App</h1>
      <Food formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            {food.name} - {food.category} - ${food.price}
            <button onClick={() => handleEdit(food)}>Edit</button>
            <button onClick={() => handleDelete(food.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFood;
