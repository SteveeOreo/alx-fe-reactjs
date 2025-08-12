import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ingredientList = ingredients.split(',').map(i => i.trim());

    if (!title || ingredientList.length < 2 || !steps) {
      setError('Please fill all fields and list at least two ingredients.');
      return;
    }

    onAddRecipe({
      title,
      ingredients: ingredientList,
      steps,
      image: 'https://via.placeholder.com/400x300', // default placeholder
    });

    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Ingredients (separate with commas)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Preparation Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
