"use client";

import { ITEM_LIST } from "../../constants";
import { useShoppingList } from "./hooks";
import type { CartItem } from "../../hooks";

type ShoppingListProps = {
  addCart: (itemCount: number, item: CartItem["item"]) => void;
};

export const ShoppingList = ({ addCart }: ShoppingListProps) => {
  const { handleChange, itemCount } = useShoppingList();

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="border-b border-dotted w-20 text-center">
        <span className="font-bold">商品一覧</span>
      </div>

      {ITEM_LIST.map((item) => (
        <div className="flex gap-10 items-center" key={item.name}>
          <div className="flex gap-3 w-[300px]">
            <p>◆ {item.name}</p>
            <p>{item.price}円</p>
          </div>

          <div className="flex gap-3">
            <p>個数：</p>

            <input
              type="number"
              min={0}
              max={99}
              className="border border-deepMocha rounded-sm w-10 text-center"
              onChange={(e) => {
                handleChange(e);
              }}
            />

            <button
              className="bg-deepMocha rounded-sm text-lilacMist px-2"
              onClick={() => {
                addCart(itemCount, item);
              }}
            >
              カートに追加する
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
