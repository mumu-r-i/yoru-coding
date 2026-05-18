"use client";
import { Dispatch, SetStateAction } from "react";
import { useShoppingCartUi } from "../../hooks";
import type { CartItem } from "../../hooks";
import { useShoppingCart } from "./hooks";
export type ShoppingCart = {
  cartItem: CartItem[];
  setCartItem: Dispatch<SetStateAction<CartItem[]>>;
};

export const ShoppingCart = ({ cartItem, setCartItem }: ShoppingCart) => {
  const { handleIncrement, handleDecrement, handleItemDelete } =
    useShoppingCart({ cartItem, setCartItem });

  let totalCount = 0;
  let totalPrice = 0;

  cartItem.forEach((item) => {
    totalCount += item.itemCount;
    totalPrice += item.itemCount * item.item.price;
  });

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="border-b border-dotted w-36 text-center">
        <span className="font-bold">ショピングカート</span>
      </div>

      <div className="bg-lavenderCloud rounded-md p-4 flex flex-col gap-3">
        <div className="border-b border-dustyRose">
          <p className="font-bold">合計：{totalCount}個</p>
          <p className="font-bold">合計金額：{totalPrice}円</p>
        </div>

        {cartItem.map((item) => (
          <div
            className="flex gap-6 justify-between items-center"
            key={item.item.name}
          >
            <div className="flex gap-2" key={item.item.name}>
              <p className="w-[250px]">{item.item.name}</p>
              <p>{item.itemCount}個</p>
              <p>{item.item.price}円</p>
            </div>

            <div className="flex gap-2">
              <button
                className="w-12 border rounded-sm bg-deepMocha text-lilacMist p-1"
                onClick={() => {
                  handleIncrement(item.item.id);
                }}
              >
                + 1
              </button>
              <button
                className="w-12 border rounded-sm bg-lilacMist text-deepMocha p-1"
                onClick={() => {
                  handleDecrement(item.item.id);
                }}
              >
                - 1
              </button>
            </div>

            <button
              className="w-12 p-1 rounded-sm bg-dustyRose text-lilacMist"
              onClick={() => {
                handleItemDelete(item.item.id);
              }}
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
