import { Link } from "react-router";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        Notre Menu Groovy
      </h2>
      <p className="text-center text-gray-600 mb-12 text-lg">
        Des plats sélectionnés qui vont vous époustoufler ! 🌈✨
      </p>
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-8 rounded-3xl shadow-2xl inline-block transform -rotate-1">
          <p className="text-3xl font-black text-white mb-4">
            Curieux de notre philosophie ? 🎉
          </p>
          <Link
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 transform shadow-xl"
            to="/about"
            data-discover="true"
          >
            À propos de nous
          </Link>
        </div>
      </div>
    </>
  );
}
