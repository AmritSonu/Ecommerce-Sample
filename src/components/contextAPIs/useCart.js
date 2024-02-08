import { useContext } from "react";
import { CartContext } from "../CartContextAPI";

export const useCart = () => {
  return useContext(CartContext);
};