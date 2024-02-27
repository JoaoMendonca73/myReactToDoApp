import React, { useState, useEffect } from "react";
import "./App.css";

export default function ToDoApp() {
  const [tasks, setTasks] = useState(["clean Room", "cook", "eat"]);

  return (
    <div className="appContainer">
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
      <ul className="cardContainer">
        {tasks.map((itm, i) => {
          return (
            <li key={i}>
              {itm}
              <span className="btnContainer">
                <button>Done</button>
                <button>Delete</button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
