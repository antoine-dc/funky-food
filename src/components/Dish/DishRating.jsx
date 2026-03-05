import { Star } from "lucide-react";

export default function DishRating({ rating, reviewCount }) {
  return (
    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
      <Star className="size-4 fill-yellow-400 text-yellow-400" />
      <span className="font-bold text-sm">{rating}</span>
      <span className="text-xs text-gray-500">({reviewCount})</span>
    </div>
  );
}
