interface Props {
  todos: string[];
}

export default function TodoItems({ todos }: Props) {
  return (
    <>
      {todos.map((item) => (
        <li key={item}> {item} </li>
      ))}
    </>
  );
}
