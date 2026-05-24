import { COMPLETED_TODO_LIST } from "../constants";

export const CompletedTodoList = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl border-b-2">完了したTODO🎉</h2>

      <div className="flex flex-col gap-2">
        {COMPLETED_TODO_LIST.map((item) => (
          <div className="flex gap-1" key={item}>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox border-deepMocha text-deepMocha"
            />

            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
