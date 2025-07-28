

import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',

  favorites: [],
  recommendations: [],

  // Recipe CRUD
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes();
    get().generateRecommendations();
  },
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().generateRecommendations();
  },
  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().generateRecommendations();
  },
  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({ recipes: updatedRecipes });
    get().filterRecipes();
    get().generateRecommendations();
  },

  // Search
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Favorites
  addFavorite: (id) => {
    const state = get();
    if (!state.favorites.includes(id)) {
      set({ favorites: [...state.favorites, id] });
      get().generateRecommendations();
    }
  },
  removeFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    }));
    get().generateRecommendations();
  },

  // Recommendations
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) =>
        !favorites.includes(recipe.id) &&
        favorites.some((favId) =>
          recipe.title
            .toLowerCase()
            .includes(
              recipes.find((r) => r.id === favId)?.title.split(' ')[0]?.toLowerCase() || ''
            )
        )
    );
    set({ recommendations: recommended.slice(0, 5) });
  },
}));


