import Card from "./Card";

const CardCon = ({
  todos,
  removeTodo,
  editTodo,
}: {
  todos: { todo: string; idx: string }[];
  removeTodo: (idx: string) => void;
  editTodo: (idx: string, editTodo: string) => void;
}) => {
  return (
    <section id='card-container' className='p-4 flex gap-2 max-h-max flex-wrap'>
      {todos &&
        todos.map((item) => {
          return (
            <Card
              key={item.idx}
              todo={item.todo}
              idx={item.idx}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          );
        })}
    </section>
  );
};

export default CardCon;
