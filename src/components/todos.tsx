"use client";

import { useTodo } from "@/store/todo";
import { useSearchParams } from "next/navigation";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleTodoDelete } = useTodo();
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");

  let filterTodos = todos;
  if (todosFilter === "active") {
    filterTodos = todos.filter((todo) => !todo.completed);
  } else if (todosFilter === "completed") {
    filterTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <ul className="w-full max-w-md space-y-4">
      {filterTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-white p-3 shadow rounded"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
              className="accent-green-500"
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`${
                todo.completed ? "line-through text-red-500" : "text-gray-800"
              }`}
            >
              {todo.task}
            </label>
          </div>

          {todo.completed && (
            <button
              type="button"
              onClick={() => handleTodoDelete(todo.id)}
              className="bg-rose-400 hover:bg-rose-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
