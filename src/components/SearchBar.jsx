import { useContext, useState } from "react";
import { MainContext } from "../Layout";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("Recherche :");

  const { data, setMenu } = useContext(MainContext);

  const handleSearch = (searchValue) => {
    setSearchTerm("Recherche : " + searchValue);
    setMenu(
      data.filter((dish) =>
        dish.name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
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
              setMenu(data);
            }
          }}
          placeholder="Cherche ton prochain repas"
          className="bg-gray-100 rounded-full w-96 p-2 px-6"
        />
      </div>
      <p className="text-gray-600 mb-12 px-6">{searchTerm}</p>
    </>
  );
}
