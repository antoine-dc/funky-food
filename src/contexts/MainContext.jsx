import { createContext, useEffect, useState } from "react";
import { getRecipes, getRecipesSearch } from "../services/recipesServices";

export const MainContext = createContext();

export function MainProvider({ children }) {
  const [menu, setMenu] = useState([]);

  const resetMenu = async () => {
    const data = await getRecipes();
    setMenu(data.recipes);
  };

  const searchRecipes = async (terms) => {
    const data = await getRecipesSearch(terms);
    setMenu(data.recipes);
  };

  useEffect(() => {
    getRecipes().then((data) => setMenu(data.recipes));
  }, []);

  return (
    <MainContext.Provider value={{ menu, setMenu, resetMenu, searchRecipes }}>
      {children}
    </MainContext.Provider>
  );
}

// Fonction personnalisée pour accéder au contexte du menu dans les composants enfants
// export function useMenu() {
//     return useContext(MainContext);
//   }
