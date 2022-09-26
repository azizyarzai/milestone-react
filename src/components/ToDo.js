import React, { useState } from "react";
import classes from './Todo.module.css'
const ToDo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const add = () => {
    setTodos([
      ...todos,
      { id: Math.ceil(Math.random() * 1000), input, stricke: false },
    ]);
    setInput("");
  };

  const del = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const done = (id) => {
    const index = todos.findIndex((val) => val.id === id);
    const _dos = [...todos];
    _dos[index].stricke = true;
    setTodos(_dos);
  };

 
  return (
    <div>
      <h1>To Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div
              style={{
                textDecoration: todo.stricke && "line-through",
                color: "#ff0000",
                fontSize: "2rem",
              }}
              className="test"
            >
              {todo.id} - {todo.input}
            </div>
            <button style={{color: "green", }} onClick={() => del(todo.id)}>Delete</button>
            <button onClick={() => done(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
};

export default ToDo;
