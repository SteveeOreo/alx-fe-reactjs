import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import recipeData from './data.json';

function App() {
  const [recipes, setRecipes] = useState(recipeData);

  const handleAddRecipe = (newRecipe) => {
    const updatedRecipe = { ...newRecipe, id: recipes.length + 1 };
    setRecipes([...recipes, updatedRecipe]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
}

export default App;
