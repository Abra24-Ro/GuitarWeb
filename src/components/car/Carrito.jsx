import React, { useState, useContext } from "react";
import { ShoppingCart, Trash2, Plus, Minus, X } from "lucide-react";
import { CartContext } from "../../context/CartContext";
import { currentFormatter } from "../../utils/currentFormatter";

export const Carrito = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);
  const [abrirCarrito, setAbrirCarrito] = useState(false);

  const updateQuantity = (id, amount) => {
    const updated = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.min(5, Math.max(1, item.quantity + amount)),
          }
        : item
    );
    setCart(updated);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const badgeText = totalItems > 9 ? "9+" : totalItems || null;
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="relative">
      {/* Botón Carrito */}
      <button
        onClick={() => setAbrirCarrito(!abrirCarrito)}
        className="relative p-2.5 hover:bg-zinc-800 rounded-lg transition-colors"
      >
        <ShoppingCart className="w-6 h-6 text-white" />

        {badgeText && (
          <span className="absolute -top-1 -right-1 bg-emerald-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
            {badgeText}
          </span>
        )}
      </button>

      {/* Overlay */}
      {abrirCarrito && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setAbrirCarrito(false)}
        />
      )}

      {/* Panel */}
      {abrirCarrito && (
        <div className="fixed right-4 sm:right-10 top-20 z-50 w-[calc(100vw-2rem)] max-w-md bg-zinc-900 text-zinc-100 rounded-xl shadow-xl border border-zinc-800 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
            <div>
              <h3 className="font-semibold text-lg">Tu Carrito</h3>
              <p className="text-sm text-zinc-400">
                {totalItems} {totalItems === 1 ? "producto" : "productos"}
              </p>
            </div>

            <button
              onClick={() => setAbrirCarrito(false)}
              className="p-1.5 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          {/* Carrito vacío */}
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-zinc-500">
              <ShoppingCart className="w-12 h-12 mb-3 text-zinc-600" />
              <p className="font-medium">Tu carrito está vacío</p>
            </div>
          ) : (
            <>
              {/* Lista de Items */}
              <div className="max-h-[400px] overflow-y-auto p-4 space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-zinc-800/40 rounded-lg p-4 border border-zinc-800 hover:bg-zinc-800/60 transition-colors"
                  >
                    <div className="flex gap-4">
                      {/* Imagen */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-md object-cover border border-zinc-700"
                      />

                      {/* Info */}
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-sm line-clamp-2">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 rounded-lg hover:bg-zinc-700 transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-zinc-500" />
                          </button>
                        </div>

                        <p className="font-bold text-emerald-400 text-sm mb-3">
                          {currentFormatter(item.price)}
                        </p>

                        {/* Controles */}
                        <div className="flex items-center gap-2 mt-auto">
                          <button
                            disabled={item.quantity === 1}
                            onClick={() => updateQuantity(item.id, -1)}
                            className={`p-1.5 rounded-lg transition-colors ${
                              item.quantity === 1
                                ? "bg-zinc-700/30 text-zinc-600 cursor-not-allowed"
                                : "bg-zinc-700 hover:bg-zinc-600 text-white"
                            }`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>

                          <div className="px-4 py-1.5 bg-zinc-700 rounded-lg">
                            <span className="text-sm font-semibold">
                              {item.quantity}
                            </span>
                          </div>

                          <button
                            disabled={item.quantity === 5}
                            onClick={() => updateQuantity(item.id, +1)}
                            className={`p-1.5 rounded-lg transition-colors ${
                              item.quantity === 5
                                ? "bg-zinc-700/30 text-zinc-600 cursor-not-allowed"
                                : "bg-emerald-600 hover:bg-emerald-500 text-white"
                            }`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="mt-3 pt-3 border-t border-zinc-800 flex justify-between text-sm">
                      <span className="text-zinc-500">Subtotal</span>
                      <span className="font-semibold text-emerald-400">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-zinc-800 p-5 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-zinc-500">Total</p>
                    <p className="text-sm text-zinc-400">
                      {totalItems} productos
                    </p>
                  </div>

                  <p className="text-2xl font-bold text-emerald-400">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-black font-semibold py-3 rounded-lg transition-colors">
                  Finalizar Compra
                </button>

                <button
                  onClick={() => setCart([])}
                  className="w-full bg-zinc-800 hover:bg-red-500/20 text-zinc-300 hover:text-red-400 border border-zinc-700 hover:border-red-400 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Vaciar carrito
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
