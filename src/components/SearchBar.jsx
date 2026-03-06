import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("Recherche :");
  return (
    <>
      <div className="flex justify-between flex-wrap mb-4">
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchTerm("Recherche : " + e.currentTarget.value);
            }
          }}
          onChange={(e) => {
            if (e.currentTarget.value.length >= 3) {
              setSearchTerm("Recherche : " + e.currentTarget.value);
            } else if (e.currentTarget.value.length === 0) {
              setSearchTerm("Recherche :");
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
