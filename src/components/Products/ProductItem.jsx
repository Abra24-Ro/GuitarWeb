import { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../../context/CartContext";

export const ProductItem = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);

  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart?.quantity || 0;

  const maxReached = quantity >= 5;

  return (
    <article
      className={`relative flex flex-col bg-zinc-900/80 
      border border-zinc-800 rounded-2xl overflow-hidden 
      backdrop-blur-sm
      transition-all duration-300 
      hover:shadow-xl hover:border-zinc-700
      hover:-translate-y-1
      ${maxReached ? "opacity-50" : ""}`}
    >
      {/* Imagen */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Badge cantidad */}
        {quantity > 0 && (
          <span className="absolute top-3 right-3 bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            x{quantity}
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col p-5 space-y-3">
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
          {product.name}
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl sm:text-3xl font-bold text-emerald-400 drop-shadow-sm">
            ${product.price}
          </span>

          <button
            type="button"
            onClick={() => addToCart(product)}
            disabled={maxReached}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${
                maxReached
                  ? "bg-zinc-700 text-zinc-400 cursor-not-allowed"
                  : "bg-emerald-500 text-black hover:bg-emerald-400 active:scale-95"
              }`}
          >
            <ShoppingCart size={16} />
            {maxReached ? "Máx. 5" : "Agregar"}
          </button>
        </div>

        {/* Límite */}
        {maxReached && (
          <span className="text-right text-xs text-red-400 pt-1">
            Alcanzaste el límite de 5
          </span>
        )}
      </div>
    </article>
  );
};
