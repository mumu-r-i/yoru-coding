"use client";

import { SHOPPING_CART_UI_CONSTANTS } from "./constants";
import { ShoppingList } from "./components/shopping-list";
import { ShoppingCart } from "./components/shopping-cart";
import { useShoppingCartUi } from "./hooks";

export const ShoppingCartUi = () => {
  const { addCart, cartItem, setCartItem } = useShoppingCartUi();

  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">
          {SHOPPING_CART_UI_CONSTANTS.PAGE_TITLE}
        </h1>

        <div className="p-4 flex flex-col rounded-md bg-lavenderCloud gap-1">
          <p className="text-lg font-bold">
            {SHOPPING_CART_UI_CONSTANTS.REQUIREMENTS_TITLE}
          </p>

          <div className="w-full border-dustyRose border" />

          <div>
            {SHOPPING_CART_UI_CONSTANTS.REQUIREMENTS_ITEM.map((item) => (
              <p key={item}>・{item}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <ShoppingList addCart={addCart} />

        <ShoppingCart cartItem={cartItem} setCartItem={setCartItem} />
      </div>
    </div>
  );
};
