import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
  const [todo, setTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      addTodo(todo.trim()); // Llama a la función pasada como prop
      setTodo(''); // Limpia el campo de texto
    }
  }

  return (
    <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
      <div className="flex margin">
        <input
          type="text"
          placeholder="Escribe TODO"
          value={todo}
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="button" value="Guardar" className="btn" onClick={handleAddTodo} />
      </div>
    </div>
  );
}

export default AddTodo