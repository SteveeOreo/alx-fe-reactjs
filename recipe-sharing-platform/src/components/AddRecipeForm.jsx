import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const ingredientList = ingredients.split(',').map(i => i.trim()).filter(Boolean);

    if (!title.trim()) newErrors.title = 'Recipe title is required.';
    if (ingredientList.length < 2) newErrors.ingredients = 'List at least two ingredients.';
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAddRecipe({
      title,
      ingredients: ingredients.split(',').map(i => i.trim()),
      steps,
      image: 'https://via.placeholder.com/400x300',
    });

    navigate('/');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10 md:mt-16">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      {Object.values(errors).length > 0 && (
        <div className="mb-4 text-red-500">
          {Object.values(errors).map((err, idx) => (
            <p key={idx}>{err}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded md:p-3"
        />
        <textarea
          placeholder="Ingredients (separate with commas)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded md:p-3"
        />
        <textarea
          placeholder="Preparation Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-2 border rounded md:p-3"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 md:px-6 md:py-3"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}
