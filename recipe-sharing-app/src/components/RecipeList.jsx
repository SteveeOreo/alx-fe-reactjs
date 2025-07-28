import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!Array.isArray(filteredRecipes)) {
    return <p>Error: No recipes loaded</p>;
  }

  if (filteredRecipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div className="space-y-4">
      {filteredRecipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div key={recipe.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">
              <Link to={`/recipes/${recipe.id}`} className="text-blue-600 hover:underline">
                {recipe.title}
              </Link>
            </h3>
            <p className="text-sm text-gray-600">{recipe.description.slice(0, 50)}...</p>
            <button
              className="mt-2 px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600"
              onClick={() =>
                isFavorite
                  ? removeFavorite(recipe.id)
                  : addFavorite(recipe.id)
              }
            >
              {isFavorite ? "★ Remove from Favorites" : "☆ Add to Favorites"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
