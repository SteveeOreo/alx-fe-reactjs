import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...(state.recipes || []), newRecipe],
    })),

  setRecipes: (recipes) => set({ recipes }),

  // Optional: add a sample recommendation array for RecommendationsList
  recommendations: [],
  setRecommendations: (recommendations) => set({ recommendations }),
}));
