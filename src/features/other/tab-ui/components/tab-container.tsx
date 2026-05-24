"use client";

import dynamic from "next/dynamic";

export const TabContainer = () => {
  const IncompleteTodoList = dynamic(
    () =>
      import("./incomplete-todo-list").then((mod) => mod.IncompleteTodoList),
    {
      ssr: false,
    },
  );
  const CompletedTodoList = dynamic(
    () => import("./completed-todo-list").then((mod) => mod.CompletedTodoList),
    {
      ssr: false,
    },
  );

  return (
    <div className="tab-ui tabs tabs-border">
      <input
        type="radio"
        name="my_tabs_2"
        className="tab"
        aria-label="Tab 1"
        defaultChecked
      />
      <div className="tab-content bg-lavenderCloud p-10">
        <IncompleteTodoList />
      </div>

      <input type="radio" name="my_tabs_2" className="tab" aria-label="Tab 2" />
      <div className="tab-content bg-lavenderCloud p-10">
        <CompletedTodoList />
      </div>
    </div>
  );
};
