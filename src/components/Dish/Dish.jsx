import { Link } from "react-router";
import { Star, Clock, Users, ShoppingCart } from "lucide-react";
import DishRating from "./DishRating";
import DishDifficulty from "./DishDifficulty";
import DishAddToCart from "./DishAddToCart";
import DishTag from "./DishTag";
import DishContent from "./DishContent";

export default function Dish({ index, dish }) {
  return (
    <Link key={dish.id} to={`/about`} className="group">
      <div
        className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-pink-400"
        style={{
          transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)",
        }}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          <DishDifficulty difficulty={dish.difficulty} />
          <DishRating rating={dish.rating} reviewCount={dish.reviewCount} />
          <DishAddToCart dish={dish} />
        </div>

        <DishContent dish={dish} />
      </div>
    </Link>
  );
}
