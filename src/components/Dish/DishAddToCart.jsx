import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export default function DishAddToCart({ dish }) {
  return (
    <div
      onClick={(e) => {
        e.preventDefault(); // Empêche la navigation lors du clic sur le bouton
        toast.success(`${dish.name} ajouté au panier ! 🎉`, {
          duration: 2000,
        });
      }}
      className="btnAddtoCart absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:text-black p-4 rounded-full shadow-xl hover:scale-110 transition-all transform cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100"
      title="Ajouter au panier"
    >
      <ShoppingCart className="size-5" />
    </div>
  );
}
