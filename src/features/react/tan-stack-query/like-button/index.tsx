import { Articles } from "./components/articles";
import { LIKE_BUTTON_CONSTANTS } from "./constants";

export const LikeButton = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">
          {LIKE_BUTTON_CONSTANTS.PAGE_TITLE}
        </h1>

        <div className="p-4 flex flex-col rounded-md bg-lavenderCloud gap-1">
          <p className="text-lg font-bold">
            {LIKE_BUTTON_CONSTANTS.REQUIREMENTS_TITLE}
          </p>

          <div className="w-full border-dustyRose border" />

          <div>
            {LIKE_BUTTON_CONSTANTS.REQUIREMENTS_ITEM.map((item) => (
              <p key={item}>・{item}</p>
            ))}
          </div>
        </div>
      </div>

      <Articles />
    </div>
  );
};
