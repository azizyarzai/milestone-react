import React, { Component, PureComponent } from "react";
import withDate from "../hoc/withDate";

class TodoClass extends PureComponent {
  constructor() {
    super();
    this.state = {
      input: "",
      todos: [],
      val: 0,
      users: [],
    };

    console.log("Constrator Called");
    // this.add = this.add.bind(this)
  }

  add = () => {
    // let new_state = { ...this.state, todos: [...this.state.todos] };
    let new_state = { ...this.state };
    new_state.todos.push({
      id: Math.ceil(Math.random() * 1000),
      input: this.state.input,
      stricke: false,
    });

    new_state.input = "";

    this.setState(new_state);
  };

  del = (id) => {
    let new_state = { ...this.state };
    const _dos = new_state.todos.filter((_do) => _do.id !== id);
    new_state.todos = _dos;
    this.setState(new_state);
  };

  done = (id) => {
    let new_state = { ...this.state };
    const index = new_state.todos.findIndex((_do) => _do.id === id);
    new_state.todos[index].stricke = true;
    this.setState(new_state);
  };

  static getDerivedStateFromProps(props, state) {
    let val = props.test;
    let new_state = { ...state, val: val + 5 };
    return new_state;
  }

  componentDidMount() {
    fetch("https://api.githu.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ ...this.state, users: data }))
    
    // const no = Math.ceil(Math.random() * 1000)
    // if (no > 100){
    //   throw new Error("dsfjsh")
    // }

    const arr = [1,2]

    const b = arr[20]

    console.log("B", b);
  }

  // shouldComponentUpdate(nextProps, nextSate) {
  //   if (nextSate.users.length !== 0 && nextSate.input.length === 0) {
  //     return true;
  //   }
  //   return false;
  // }

  // componentWillUnmount

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate called");
    return 5
  }

  componentDidUpdate(prevProps, prevState,value){
    console.log(`componentDidUpdate claaed with ${value}`);
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h1>To Do List Class Based</h1>
        <p>Val = {this.state.val}</p>
        <div>
          <h2>GitHub Users</h2>
          {this.state.users.map((user) => (
            <div key={user.login}>
              <p>{user.login}</p>
            </div>
          ))}
        </div>
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
              <button
                style={{ color: "green" }}
                onClick={() => this.del(todo.id)}
              >
                Delete
              </button>
              <button onClick={() => this.done(todo.id)}>Done</button>
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

export default withDate(TodoClass);
