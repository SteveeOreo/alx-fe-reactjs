import { Link } from 'react-router-dom';

export default function HomePage({ recipes }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recipe Sharing Platform</h1>
        <Link to="/add-recipe" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add Recipe
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="block bg-white rounded shadow hover:shadow-lg transition p-4"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded mb-3" />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
