import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onUpdate }) => {
    const [title, setTitle] = useState(recipe.title);
    const [ingredients, setIngredients] = useState(recipe.ingredients);
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
  
      onUpdate({
        ...recipe,
        title,
        ingredients,
      });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <button type="submit">Update Recipe</button>
      </form>
    );
  };
  

export default EditRecipeForm;
