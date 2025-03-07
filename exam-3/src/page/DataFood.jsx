import React, { useState, useEffect } from 'react';
import { getFoods, createFood, updateFood, deleteFood } from '../service/FoodService';
import '../App.css';

const DataFood = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    image: '', // New field for image URL
  });
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    const res = await getFoods();
    setFoods(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await updateFood(formData.id, formData);
      fetchFoods(); // Refresh list after update
    } else {
      const newFood = await createFood(formData);
      setFoods((prevFoods) => [...prevFoods, newFood]);
    }
    setFormData({ name: '', category: '', price: '', image: '' });
  };

  const handleDelete = async (id) => {
    await deleteFood(id);
    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== id));
  };

  const handleEdit = (food) => {
    setFormData(food);
  };

  return (
    <div>
      <h1>Food List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
        <button type="submit">{formData.id ? 'Update' : 'Add'} Food</button>
      </form>

      <ul>
        {foods.map((food) => (
          <li key={food.id} style={{ marginBottom: '20px' }}>
            <img
              src={food.image}
              alt={food.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }}
            />
            <span>{food.name} - {food.category} - ${food.price}</span>
            <button onClick={() => handleEdit(food)}>Edit</button>
            <button onClick={() => handleDelete(food.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFood;
