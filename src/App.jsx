/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";

export default function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  let [newTask, setNewTask] = useState("");
  const [timeNow, setTimeNow] = useState("00:00");
  const [isDone, setIsDone] = useState(false);

  const handleSetTasks = () => {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDoneButton = () => {
    setIsDone(!isDone)
  }

  //Delete Button Action

  const handleDelButton = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  //Set clock

  useEffect(() => {
    const int = setInterval(() => {
      const dt = new Date().toLocaleTimeString();

      setTimeNow(dt);
    }, 1000);

    // Clear clock interval
    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <div className="appContainer">
      <div className="cpy">&copy;2024 Miguel</div>
      <div className="timeDisplay">
        <p>{timeNow}</p>
      </div>
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
            <li key={item.id} id={i} className={isDone?'done':''}>
              <p>{item}</p>
              <span className="btnContainer">
                <button className="doneButton" onClick={handleDoneButton}>
                  Done
                </button>
                <button
                  className="delButton"
                  onClick={() => handleDelButton(i)}
                >
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
