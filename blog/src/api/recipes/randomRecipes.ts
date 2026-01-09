const BASE_URL = "https://dummyjson.com";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export const randomRecipes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/recipes?limit=10`);

    if (!response.ok) {
      throw new Error("Failed to fetch random recipes");
    }

    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Error fetching random recipes:", error);
    throw error;
  }
};
