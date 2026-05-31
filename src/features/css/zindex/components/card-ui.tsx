import { createPortal } from "react-dom";
import { ToolTip } from "./tool-tip";

export const CardUi = () => {
  return (
    <div className="px-3 py-2 h-40 rounded-md w-full border border-deepMocha hover:opacity-60 bg-lavenderCloud peer-hover:opacity-60">
      <button className="show-tool-tip h-8 w-8 p-1 bg-deepMocha text-lilacMist hover:opacity-60">
        ?
      </button>
    </div>
  );
};
