"use client";
import { useShoppingCartUi } from "../../hooks";
import type { CartItem } from "../../hooks";
type ShoppingCartProps = {
  cartItem: CartItem[];
};

export const ShoppingCart = ({ cartItem }: ShoppingCartProps) => {
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

      <div className="bg-lavenderCloud rounded-md p-2 flex flex-col gap-3">
        <div className="border-b border-dustyRose">
          <p className="font-bold">合計：{totalCount}個</p>
          <p className="font-bold">合計金額：{totalCount}円</p>
        </div>

        {cartItem.map((item) => (
          <div className="flex gap-2" key={item.item.name}>
            <p className="w-[250px]">{item.item.name}</p>
            <p className="w-10">{item.itemCount}個</p>
            <p className="">{item.item.price}円</p>
          </div>
        ))}
      </div>
    </div>
  );
};
