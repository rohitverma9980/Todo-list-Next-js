"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

type TodoContextType = {
  todos: Todo[];
  handleAddTodo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleTodoDelete: (id: string) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      const parsed: Todo[] = JSON.parse(stored);

      const revived = parsed.map(todo => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
      setTodos(revived);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); 
  }, [todos]);

  const handleAddTodo = (task: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      task,
      completed: false,
      createdAt: new Date(),
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTodoDelete = (id: string) => {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, handleAddTodo, toggleTodoAsCompleted, handleTodoDelete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
