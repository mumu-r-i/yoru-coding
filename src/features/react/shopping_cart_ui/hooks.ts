import { ChangeEvent, useState } from "react";
import type { ItemListType } from "./constants";

export type CartItem = {
  item: ItemListType[number];
  itemCount: number;
};

export const useShoppingCartUi = () => {
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const addCart = (itemCount: number, item: CartItem["item"]) => {
    const addedItem = cartItem.find((cartItem) => {
      return cartItem.item.name === item.name;
    });

    if (addedItem) {
      setCartItem(
        cartItem.map((cartItem) =>
          cartItem.item.name === item.name
            ? { ...cartItem, itemCount }
            : cartItem,
        ),
      );
    } else {
      setCartItem([...cartItem, { item: item, itemCount: itemCount }]);
    }
  };

  return { cartItem, setCartItem, addCart };
};
