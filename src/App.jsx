import React, { useState, useEffect } from "react";

export default function ToDoApp() {
  const [tasks, setTasks] = useState("clean Room");

  return (
    <div>
      <p>My ToDo App</p>
      <div className="inputContainer">
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="Enter Task.."
        />
        <button className="addTask">Add</button>
      </div>
      <ul className="cardContainer">{tasks}</ul>
    </div>
  );
}
