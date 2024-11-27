import React from 'react'
import { useEffect, useState } from 'react';

const TablaTodo = ({todos, removeTodo, editTodo, editingIndex, setEditingIndex}) => {
  const [currentTodo, setCurrentTodo] = useState<string>(''); // Para almacenar el valor del TODO en edición

  const handleEditClick = (index: number, todo: string) => {
    setEditingIndex(index); // Activar el modo edición
    setCurrentTodo(todo); // Prellenar el campo con el valor actual del TODO
  };

  const handleSaveClick = (index: number) => {
    if (currentTodo.trim() !== '') {
      editTodo(index, currentTodo.trim()); // Guardar el nuevo valor
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table" id="tabla">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    value={currentTodo}
                    onChange={(e) => setCurrentTodo(e.target.value)}
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                ) : (
                  todo
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button className="btn btn-success" onClick={() => handleSaveClick(index)}>
                    Guardar
                  </button>
                ) : (
                  <>
                    <button className="btn btn-warning" onClick={() => handleEditClick(index, todo)}>
                      Editar
                    </button>
                    <button className="btn btn-error" onClick={() => removeTodo(index)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaTodo