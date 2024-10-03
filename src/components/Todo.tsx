import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");

  return (
    <form>
      <input
        type="text"
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      />
      <button type="submit">Add</button>
    </form>
  );
}
