import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={
        <>
          <AddRecipeForm />
          <RecipeList />
        </>
      } />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  </Router>
);

export default App;


