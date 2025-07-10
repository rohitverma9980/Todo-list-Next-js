"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Navbar() {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todos");

  const navClass = (filter: string | null) =>
    `px-3 py-1 border-b-2 transition-all duration-200 ${
      filter === todosFilter || (filter === null && todosFilter === null)
        ? "border-green-500 text-green-700 font-bold"
        : "border-transparent text-gray-500 hover:text-green-500"
    }`;

  return (
    <nav className="flex gap-6 mb-6">
      <Link href="/" className={navClass(null)}>
        All
      </Link>
      <Link href="/?todos=active" className={navClass("active")}>
        Active
      </Link>
      <Link href="/?todos=completed" className={navClass("completed")}>
        Completed
      </Link>
    </nav>
  );
}

export default Navbar;