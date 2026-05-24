"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { IncompleteTodoList } from "./incomplete-todo-list";

/** 毎renderで定義されるのを防ぐためcomponent外に定義する */
const CompletedTodoList = dynamic(
  () => import("./completed-todo-list").then((mod) => mod.CompletedTodoList),
  {
    loading: () => <p>Loading...</p>,
  },
);

/** 初期表示で必要のないものだけをdynamic importするべきなのでタブ2のみ */
export const TabContainer = () => {
  const [activeTab, setActiveTab] = useState<"incomplete" | "completed">(
    "incomplete",
  );

  return (
    <div className="tab-ui tabs tabs-border">
      <input
        type="radio"
        name="incomplete"
        className="tab"
        aria-label="Tab 1"
        checked={activeTab === "incomplete"}
        onChange={() => setActiveTab("incomplete")}
      />
      <div className="tab-content bg-lavenderCloud p-10">
        {activeTab === "incomplete" && <IncompleteTodoList />}
      </div>

      <input
        type="radio"
        name="completed"
        className="tab"
        aria-label="Tab 2"
        checked={activeTab === "completed"}
        onChange={() => setActiveTab("completed")}
      />
      <div className="tab-content bg-lavenderCloud p-10">
        {activeTab === "completed" && <CompletedTodoList />}
      </div>
    </div>
  );
};
