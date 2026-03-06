import { Link } from "react-router";
import CTA from "../components/CTA";
import data from "../data/menu.json";
import Dish from "../components/Dish/Dish";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState(data);
  const [searchTerm, setSearchTerm] = useState("Recherche :");

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
      <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        Notre Menu Groovy
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Des plats sélectionnés qui vont vous époustoufler ! 🌈✨
      </p>
      {/* SEARCHBAR */}
      <SearchBar menu={menu} setMenu={setMenu} />
      {/* SEARCHBAR - END */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menu.map((dishData, index) => (
          <Dish key={index} index={index} dish={dishData} />
        ))}
      </section>

      <CTA
        message="Curieux de notre philosophie ? 🎉"
        link="/about"
        label="À propos de nous"
      />
    </>
  );
}
