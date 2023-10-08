import { useState } from "react";

import CardCon from "./CardCon";
import Nav from "./Nav";

export default function Todo() {
  const [todos, setTodos] = useState<{ todo: string; idx: string }[]>([]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setTodos([{ todo: newTodo, idx: "" + (todos.length + 1) }, ...todos]);
    setNewTodo("");
  };

  const removeTodo = (idx: string) => {
    setTodos(todos.filter((item) => item.idx !== idx));
  };

  const editTodo = (idx: string, editTodo: string) => {
    setTodos(
      todos.map((item) => {
        if (item.idx === idx) {
          item.todo = editTodo;
        }
        return item;
      })
    );
  };
  return (
    <>
      <header>
        <Nav newTodo={newTodo} addTodo={addTodo} setNewTodo={setNewTodo} />
      </header>

      <main className='mt-[85px]'>
        <CardCon todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
      </main>
    </>
  );
}
