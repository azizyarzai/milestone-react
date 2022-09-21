import React, { useState } from "react";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const add = () => {
    setTodos([...todos, { id: Math.ceil(Math.random() * 1000), input }]);
    setInput("");
  };

  const del = (id) => {
    const index = todos.findIndex((val) => val.id === id);
    const _dos = [...todos];
  };

  const todosComp = todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.id} - {todo.input}{" "}
        <button onClick={() => del(todo.id)}>Delete</button>
      </li>
    );
  });

  return (
    <div>
      <h1>To Do List</h1>
      <ul>{todosComp}</ul>
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
