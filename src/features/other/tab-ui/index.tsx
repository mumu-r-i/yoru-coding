import { TAB_UI_CONSTANTS } from "./constants";
import { TabContainer } from "./components/tab-container";

export const TabUi = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{TAB_UI_CONSTANTS.PAGE_TITLE}</h1>

        <div className="p-4 flex flex-col rounded-md bg-lavenderCloud gap-1">
          <p className="text-lg font-bold">
            {TAB_UI_CONSTANTS.REQUIREMENTS_TITLE}
          </p>

          <div className="w-full border-dustyRose border" />
          <p>・TODOリスト風タブ</p>
          <p>※データ取得などはしない</p>
        </div>
      </div>

      <TabContainer />
    </div>
  );
};
