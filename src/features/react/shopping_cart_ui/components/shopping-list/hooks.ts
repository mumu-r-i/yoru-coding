import { type ChangeEvent, useState } from "react";

export const useShoppingList = () => {
  const [itemCount, setItemCount] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemCount(Number(e.target.value));
  };

  return { handleChange, itemCount };
};
