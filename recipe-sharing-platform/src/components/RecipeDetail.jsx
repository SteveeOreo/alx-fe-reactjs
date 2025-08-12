import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) return <p className="p-6">Recipe not found</p>;

  return (
    <div className="p-6">
      <Link to="/" className="text-blue-500 hover:underline">&larr; Back</Link>
      <h1 className="text-3xl font-bold my-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full max-w-lg rounded-lg mb-6" />
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}
