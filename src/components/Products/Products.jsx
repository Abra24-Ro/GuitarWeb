import React, { useContext} from "react";
import { ProductItem } from "./ProductItem";
import { products } from "../../data/products.data";
import { CartContext } from "../../context/CartContext";


export const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </>
  );
};

