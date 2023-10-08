import React from "react";

export default function Nav({
  newTodo,
  addTodo,
  setNewTodo,
}: {
  newTodo: string;
  addTodo: () => void;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
}) {
  // Handle Input Change
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setNewTodo(e.target.value);
  // };
  return (
    <nav className='w-full fixed top-0 flex items-center justify-between bg-primary p-4 text-base-100'>
      <h1 className='text-3xl font-bold'>Todo</h1>
      <div>
        <input
          type='text'
          className='w-[300px] p-2 outline-none text-primary rounded-md mr-4'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Add Todo ...'
        />
        <button
          onClick={addTodo}
          className='bg-accent p-2 rounded-md font-medium'
        >
          Add Todo
        </button>
      </div>
    </nav>
  );
}
