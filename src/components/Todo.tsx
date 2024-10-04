import { useState } from "react";
import Form from "./Form";
import TodoItems from "./TodoItems";

export default function Todo() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <>
      <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <ul>
        <TodoItems todos={todos} />
      </ul>
    </>
  );
}
