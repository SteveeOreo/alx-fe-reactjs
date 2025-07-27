import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map((r) => (
        <div key={r.id}>
          <h4>{r.title}</h4>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
