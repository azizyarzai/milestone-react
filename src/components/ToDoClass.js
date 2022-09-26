import React, { Component } from "react";

class TodoClass extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todos: [],
    };
    // this.add = this.add.bind(this)
  }

  add = () => {
    let new_state = { ...this.state };
    new_state.todos.push({
      id: Math.ceil(Math.random() * 1000),
      input: this.state.input,
      stricke: false,
    });

    new_state.input = "";

    this.setState(new_state);
  };

  render() {
    return (
      <div>
        <h1>To Do List Class Based</h1>
        <ul>
          {this.state.todos.map((todo) => (
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
              {/* <button style={{color: "green", }} onClick={() => del(todo.id)}>Delete</button>
                    <button onClick={() => done(todo.id)}>Done</button> */}
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) =>
              this.setState({ ...this.state, input: e.target.value })
            }
          />
          <button onClick={this.add}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoClass;
