export const SHOPPING_CART_UI_CONSTANTS = {
  PAGE_TITLE: "Day1(26.05.17)：ショッピングカートUI",
  REQUIREMENTS_TITLE: "本日実装するもの",
  REQUIREMENTS_ITEM: [
    "商品一覧",
    "カート追加",
    "数量変更",
    "合計金額表示",
    "削除",
  ],
} as const;

export type ItemListType = typeof ITEM_LIST;

export const ITEM_LIST = [
  { id: 1, name: "板チョコレート[ミルク]", price: 400 },
  { id: 2, name: "板チョコレート[ホワイト]", price: 400 },
  { id: 3, name: "板チョコレート[ブラック]", price: 400 },
  { id: 4, name: "板チョコレート[アーモンド]", price: 450 },
  { id: 5, name: "板チョコレート[ラムレーズン]", price: 450 },
  { id: 6, name: "板チョコレート[トフィ]", price: 450 },
] as const;
