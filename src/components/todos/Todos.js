import React, { useState, useReducer } from "react";
import { Route } from "react-router";
import TodoItem from "./TodoItem";

function reducer(todos, action) {
  switch (action.type) {
    case "add-todo":
      return [...todos, addTodo(action.payload.text)];
    case "flip":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "delete":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: "add-todo", payload: { text: text } });
    setText("");
  }

  // console.log(todos);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "flex-start",
          padding: 20,
        }}
      >
        {/* Text Simple TodoApp */}
        <h1 style={{ fontSize: 100, color: "#123" }}>Simple TodoApp</h1>

        <form onSubmit={handleSubmit}>
          {/* Textinput todo list */}
          <input
            style={{ width: 420, marginTop: 10 }}
            // Ambil dari bootstrap
            class="input-group-text"
            // ===================
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          {/* Tombol add Todo */}
          <button
            style={{ marginTop: 20 }}
            type="Submit"
            // Ambil dari bootstrap
            class="btn btn-primary"
            // ===================
          >
            Add Todo
          </button>
        </form>
      </div>
      <div style={{ flex: 2, padding: 20 }}>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </div>
  );
}

export default Todos;
