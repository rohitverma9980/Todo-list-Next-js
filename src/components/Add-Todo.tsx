"use client";

import { FormEvent, useState } from "react";
import { useTodo } from "@/store/todo";

function AddToDo() {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodo();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      handleAddTodo(todo);
      setTodo("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 mb-6 w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Write your todo"
        value={todo}
        onChange={handleChange}
        className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        ADD
      </button>
    </form>
  );
}

export default AddToDo;
