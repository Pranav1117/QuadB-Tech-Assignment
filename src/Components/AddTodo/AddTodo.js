import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/actions";
import "./addtodo.css";
const AddTodo = () => {
// variables to store user input
  const [taskName, setTaskName] = useState("");

// variable to store refrenance of dispatch function which will be use to dispatch action to redux store
  const dispatch = useDispatch();

// this function while trigger on change of input field so whenever user type something it will take that and will stores it int taskName variable   
  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

// this function will trigger on submit button  
  const handleSubmit = (e) => {
    // it will prevent default behaviour of browser that is refresh
    e.preventDefault();

    // it will trigger alert method if input is empty
    if (taskName.trim() === "") {
      alert("Please enter a task!");
      return;
    }
    // it will dispatch an action called "addTask" with payload of "taskName". this will go to the redux store and it will return new state based on our previous state and action type
    dispatch(addTask(taskName));
    // it will set taskName variable to empty string
    setTaskName("");
  };

  return (
    <div className="add-todo-container">
      <h2 className="title">To Do</h2>
      <form className="add-todo-form">
        <div className="input-button-wrapper">
          <input
            className="input"
            type="text"
            placeholder="enter your task here"
            onChange={(e) => handleChange(e)}
            value={taskName}
          />
          <button
            className="add-btn"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
