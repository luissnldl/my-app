'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TablaTodo from './TablaTodo';

const page = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const addTodo = (newTodo: string) => {
        setTodos([...todos, newTodo]); // Agrega el nuevo TODO al estado
    };

    const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index)); // Eliminar el TODO con el índice dado
    }

    const editTodo = (index: number, updatedTodo: string) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = updatedTodo; // Actualizar el TODO editado
        setTodos(updatedTodos);
        setEditingIndex(null); // Salir del modo de edición
    }

    return (
    <div className="mockup-window bg-base-300 border">
        <div className="bg-base-200 flex justify-center px-4 py-16 flex w-full">
            <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
            <TablaTodo todos={todos} removeTodo={removeTodo} editTodo={editTodo} editingIndex={editingIndex} setEditingIndex={setEditingIndex}/>
            </div>
            <div className="divider divider-horizontal"></div>
            <AddTodo addTodo={addTodo} />
        </div>
    </div>
    )
}

export default page