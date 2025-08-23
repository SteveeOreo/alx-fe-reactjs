import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a Todo App", completed: false },
  ]);
  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = (text) => {
    if (text.trim() === "") return;
    setTodos([...todos, { text, completed: false }]);
  };

  // Toggle completed status
  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  // Delete a todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Todo List
      </h1>

      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </form>

      {/* Todo Items */}
      <ul className="mt-4 space-y-3">
        {todos.map((todo, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            <button
              onClick={() => toggleTodo(idx)}
              className={`text-left flex-1 ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {todo.text}
            </button>
            <button
              aria-label={`delete-${idx}`}
              onClick={() => deleteTodo(idx)}
              className="ml-3 bg-red-500 text-white text-sm px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
