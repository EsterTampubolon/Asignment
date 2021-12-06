import React from "react";

function TodoItem({ todo, dispatch }) {
  return (
    <div
      style={{
        display: "flex",
        height: 48,
        alignItems: "center",
        borderRadius: 5,
        margin: 10,
        backgroundColor: "#123",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Checkbox selesai */}
        <input
          style={{ margin: 10 }}
          // Ambil dari bootstrap
          class="form-check-input"
          // ====================
          type="checkbox"
          onChange={() => dispatch({ type: "flip", payload: { id: todo.id } })}
        />
        {/* ======================================================= */}

        {/* Text Todo list */}
        <span
          style={{
            textDecoration: todo.complete ? "line-through" : "none",
            color: "#fff",
          }}
        >
          {todo.text}
        </span>
        {/* ==================================================== */}
      </div>
      <div>
        {/* Tombol hapus  */}
        <button
          style={{ margin: 10 }}
          // Ambil dari bootstrap
          class="btn btn-light"
          // ===================
          onClick={() => dispatch({ type: "delete", payload: { id: todo.id } })}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
