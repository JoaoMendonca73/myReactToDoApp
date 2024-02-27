import React, { useState, useEffect } from "react";
import "./App.css";

export default function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState("");

  const handleSetTasks = () => {
    setTasks((t) => [...t, newTask]);
    setNewTask = "";
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDoneButton = () => {};
  const handleDelButton = () => {};

  return (
    <div className="appContainer">
      <h1>My ToDo App</h1>
      <div className="inputContainer">
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="Enter Task.."
          onChange={handleInputChange}
          value={newTask}
        />
        <button className="addTask" onClick={handleSetTasks}>
          Add
        </button>
      </div>
      <ul className="cardContainer">
        {tasks.map((item, i) => {
          return (
            <li key={i}>
              <p>{item}</p>
              <span className="btnContainer">
                <button className="doneButton" onClick={handleDoneButton}>
                  Done
                </button>
                <button className="delButton" onClick={handleDelButton}>
                  Del
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
