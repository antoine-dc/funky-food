import { useContext, useState, useTransition } from "react";
import { MainContext } from "../contexts/MainContext";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("Recherche :");

  const { resetMenu, searchRecipes } = useContext(MainContext);

  const [isPending, startTransition] = useTransition();

  const handleSearch = (searchValue) => {
    setSearchTerm("Recherche : " + searchValue);
    startTransition(() => {
      searchRecipes(searchValue.toLowerCase());
    });
  };
  return (
    <>
      <div className="flex justify-between flex-wrap mb-4">
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e.currentTarget.value);
            }
          }}
          onChange={(e) => {
            if (e.currentTarget.value.length >= 3) {
              handleSearch(e.currentTarget.value);
            } else if (e.currentTarget.value.length === 0) {
              setSearchTerm("Recherche :");
              resetMenu();
            }
          }}
          placeholder="Cherche ton prochain repas"
          className="bg-gray-100 rounded-full w-96 p-2 px-6"
        />
      </div>
      <p className="text-gray-600 mb-12 px-6">{searchTerm}</p>
      <p className="text-gray-600 mb-12 px-6">
        {isPending && <p>Chargement des résultats...</p>}
      </p>
    </>
  );
}
