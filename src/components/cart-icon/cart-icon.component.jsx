import React from "react";
import { ShoppingIcon,CartIconContainer, ItemCount  } from "./cart-icon.styles";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
function CartIcon() {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
