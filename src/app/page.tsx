import AddToDo from "@/components/Add-Todo";
import Navbar from "@/components/Navbar";
import Todos from "@/components/todos";
import { RiTodoLine } from "react-icons/ri";
import { Suspense } from "react"; // ✅ Import Suspense

function Todo() {
  return (
    <main className="flex items-center flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 p-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900 flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 mt-10 text-center">
        <RiTodoLine className="text-green-600 text-3xl sm:text-4xl" />
        <span>TODO NEXT + TYPESCRIPT</span>
        <RiTodoLine className="text-green-600 text-3xl sm:text-4xl" />
      </h2>

      <Suspense fallback={<div>Loading filter...</div>}>
        <Navbar /> {/* ✅ Wrap with Suspense */}
      </Suspense>

      <AddToDo />

      <Suspense fallback={<div>Loading todos...</div>}>
        <Todos /> {/* ✅ Wrap with Suspense */}
      </Suspense>
    </main>
  );
}

export default Todo;
