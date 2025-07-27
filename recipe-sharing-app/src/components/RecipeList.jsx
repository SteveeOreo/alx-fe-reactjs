import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  if (!recipes || recipes.length === 0) {
    return <p>No recipes yet.</p>;
  }

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
