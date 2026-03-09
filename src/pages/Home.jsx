import { Link } from "react-router";
import CTA from "../components/CTA";
import SearchBar from "../components/SearchBar";
import { lazy, Suspense, useContext } from "react";
import { MainContext } from "../contexts/MainContext";

import DishSkeleton from "../components/Dish/DishSkeleton";

export default function Home() {
  const { menu } = useContext(MainContext);
  const Dish = lazy(() => import("../components/Dish/Dish"));
  // const DishSkeleton = lazy(() => import("../components/Dish/DishSkeleton"));
  return (
    <>
      <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        Notre Menu Groovy
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Des plats sélectionnés qui vont vous époustoufler ! 🌈✨
      </p>

      <SearchBar />

      <Suspense
        fallback={
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DishSkeleton index="1" />
            <DishSkeleton index="2" />
            <DishSkeleton index="3" />
          </section>
        }
      >
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menu.map((dishData, index) => (
            <Dish key={index} index={index} dish={dishData} />
          ))}
        </section>
      </Suspense>

      <CTA
        message="Curieux de notre philosophie ? 🎉"
        link="/about"
        label="À propos de nous"
      />
    </>
  );
}
