import { INCOMPLETE_TODO_LIST } from "../constants";

export const IncompleteTodoList = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl border-b-2">今日のTODO</h2>

      <div className="flex flex-col gap-2">
        {INCOMPLETE_TODO_LIST.map((item) => (
          <div className="flex gap-1" key={item}>
            <input
              type="checkbox"
              className="checkbox border-deepMocha text-deepMocha"
            />

            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
