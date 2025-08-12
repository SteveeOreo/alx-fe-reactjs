// src/components/HomePage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

const HomePage = ({ recipes, onDelete }) => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    setRecipeList(recipes.length > 0 ? recipes : recipesData);
  }, [recipes]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipeList.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">
                {recipe.ingredients.slice(0, 3).join(", ")}...
              </p>
              <div className="flex justify-between">
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </Link>
                <button
                  onClick={() => onDelete(recipe.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/add-recipe"
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Add New Recipe
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
