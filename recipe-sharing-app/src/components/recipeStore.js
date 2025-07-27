import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(
  persist(
    (set) => ({
      recipes: [],
      addRecipe: (newRecipe) =>
        set((state) => ({
          recipes: [...state.recipes, newRecipe],
        })),
      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((r) => r.id !== id),
        })),
      updateRecipe: (updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((r) =>
            r.id === updatedRecipe.id ? updatedRecipe : r
          ),
        })),
    }),
    {
      name: 'recipe-storage', // 👈 name of key in localStorage
    }
  )
);

