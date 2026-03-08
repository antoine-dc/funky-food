import { createContext, useEffect, useState } from "react";
import { getRecipes } from "../services/recipesServices";
// import { useContext } from "react";
// import data from "../data/menu.json";

export const MainContext = createContext();

export function MainProvider({ children }) {
  const [menu, setMenu] = useState([]);

  const resetMenu = () => setMenu([]);

  useEffect(() => {
    getRecipes().then((data) => setMenu(data.recipes));
  }, []);

  return (
    <MainContext.Provider value={{ menu, setMenu, resetMenu }}>
      {children}
    </MainContext.Provider>
  );
}

// Fonction personnalisée pour accéder au contexte du menu dans les composants enfants
// export function useMenu() {
//     return useContext(MainContext);
//   }
