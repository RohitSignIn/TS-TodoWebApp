import { useState } from "react";

type CardProps = {
  todo: string;
  idx: string;
  removeTodo: (idx: string) => void;
  editTodo: (idx: string, editTodo: string) => void;
};

export default function Card({ todo, idx, removeTodo, editTodo }: CardProps) {
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(todo);

  const handleEdit = () => {
    setEdit(!edit);
    if (!edit) {
      editTodo(idx, update);
    }
  };
  return (
    <div
      id='card'
      className='relative w-[200px] h-auto bg-primary p-4 rounded-md cursor-pointer'
    >
      {!edit ? (
        <p className='text-lg'>{update}</p>
      ) : (
        <textarea
          className='w-full'
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
        />
      )}
      <div className='relative w-full bottom-0 mt-4 flex'>
        <button
          id={idx}
          className='bg-success text-base-100 w-full mx-1 text-lg rounded-md'
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          id={idx}
          className='bg-error text-base-100 w-full mx-1 text-lg rounded-md'
          onClick={() => removeTodo(idx)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
