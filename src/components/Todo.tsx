import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item}> {item} </li>
        ))}
      </ul>
    </>
  );
}
