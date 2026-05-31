"use client";
import { CardUi } from "./components/card-ui";
import { ZINDEX_CONSTANTS } from "./constants";
import { ToolTip } from "./components/tool-tip";

export const Zindex = () => {
  return (
    <div className="flex flex-col gap-8 p-4 h-dvh">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{ZINDEX_CONSTANTS.PAGE_TITLE}</h1>

        <div className="p-4 flex flex-col rounded-md bg-lavenderCloud gap-1">
          <p className="text-lg font-bold">
            {ZINDEX_CONSTANTS.REQUIREMENTS_TITLE}
          </p>

          <div className="w-full border-dustyRose border" />

          <p>z-indexとisolationを使ってhover退避できるか検証してみよう👀</p>
          <p>
            →親要素でopacityをかけているのでz-indexで退避はできない🙅‍♀️
            <br />
            ①CardUiとToolTipの親要素になるdivタグを追加
            <br />
            ②has()を使用して、ボタンhover時にツールチップのopacityを切り替える
          </p>
        </div>
      </div>

      <div className="relative has-[.show-tool-tip:hover]:[&_.tool-tip]:opacity-100">
        <CardUi />
        <ToolTip />
      </div>
    </div>
  );
};
