import TodoItems from "./TodoItems";

interface Props {
  todos: string[];
}

export default function TodoList({ todos }: Props) {
  return (
    <ul>
      <TodoItems todos={todos} />
    </ul>
  );
}
