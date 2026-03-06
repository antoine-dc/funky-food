// import { createContext } from "react";
// export const MainContext = createContext();

import { createContext, useContext, useState } from "react";
import data from "../data/menu.json";

export const MainContext = createContext();

export function MainProvider({ children }) {
  const [menu, setMenu] = useState(data);

  //   const toggle = () => setIsOpen(prev => !prev);

  return (
    <MainContext.Provider value={{ menu, setMenu }}>
      {children}
    </MainContext.Provider>
  );
}

// export function useOpen() {
//   return useContext(OpenContext);
// }
