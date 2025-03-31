import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from './recipeSlice';

const RecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRecipe({ title, ingredients: ingredients.split(', ') }));
    setTitle('');
    setIngredients('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe Title" required />
      <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="space for Comma" required />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;