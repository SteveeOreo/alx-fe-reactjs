import { useRecipeStore } from '../store/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations || []);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Recommended Recipes</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((rec) => (
          <div key={rec.id} className="p-4 border rounded shadow">
            <h4 className="text-lg font-semibold">{rec.title}</h4>
            <p className="text-gray-600">{rec.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
