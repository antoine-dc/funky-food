const API_URL = "https://dummyjson.com/recipes";

export async function getRecipes() {
  const response = await fetch(`${API_URL}`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}

export async function getRecipesSearch(terms) {
  const response = await fetch(`${API_URL}/search?q=${terms}`);

  if (!response.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return response.json();
}
