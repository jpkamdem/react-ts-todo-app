interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Form({ todo, setTodo, todos, setTodos }: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (todo.trim() === "") {
      return;
    }
    setTodos([...todos, todo.trim()]);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(event) => setTodo(event.target.value)}
        value={todo}
      />
      <button type="submit" disabled={todo.trim() === ""}>
        Add
      </button>
    </form>
  );
}
