import type { ShoppingCart } from "./index";

export const useShoppingCart = ({ cartItem, setCartItem }: ShoppingCart) => {
  const handleIncrement = (id: number) => {
    const target = cartItem.find((cartItem) => {
      return cartItem.item.id === id;
    });

    if (target) {
      setCartItem(
        cartItem.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, itemCount: cartItem.itemCount + 1 }
            : cartItem,
        ),
      );
    }
  };

  const handleDecrement = (id: number) => {
    const target = cartItem.find((cartItem) => {
      return cartItem.item.id === id;
    });

    if (target) {
      setCartItem(
        cartItem.map((cartItem) =>
          cartItem.item.id === id
            ? { ...cartItem, itemCount: cartItem.itemCount - 1 }
            : cartItem,
        ),
      );
    }
  };

  const handleItemDelete = (id: number) => {
    const target = cartItem.find((cartItem) => {
      return cartItem.item.id === id;
    });

    if (target) {
      setCartItem(
        cartItem.filter((cartItem) => cartItem.item.id !== target.item.id),
      );
    }
  };

  return {
    handleIncrement,
    handleDecrement,
    handleItemDelete,
  };
};
