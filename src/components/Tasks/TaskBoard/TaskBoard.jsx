import { useState } from "react";

import SearchTask from "../SearchTask/SearchTask";
import TaskAction from "../TaskAction/TaskAction";
import TaskList from "../TaskList/TaskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React Native",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ["Web", "react", "js"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, seTasks] = useState([defaultTask]);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
