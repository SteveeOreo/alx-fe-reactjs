import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes || []);

  return (
    <div className="space-y-4">
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
