import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecommendationsList from './components/RecommendationsList'; // if using

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <RecommendationsList />
    </div>
  );
}

export default App;
