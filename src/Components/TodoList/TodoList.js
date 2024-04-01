import "./todolist.css";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, markDone } from "../../Redux/actions";
import { useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";

const TodoList = () => {
  // const [storedTasks, setStoredTasks] = useState([]);
  // variable to store all the states of our store using useSelectore hook provided by the react-redux
  const tasks = useSelector((state) => state.tasks);

  // variable to store refrenance of useDispatch function
  const dispatch = useDispatch();

  // this function will delete task with specific id
  const handleDelete = (id) => {
    // it will dispatch deleteTask with certain id. The task that is stored in redux store with same id will be deleted.
    // since dispatch expect an action object which consist of type and sometime payload.
    // here deleteTask is action creator which returns object that contain type and payload property.
    dispatch(deleteTask({ id }));
  };

  //this function will change value of our "isCompleted" property to true
  const handleMarkDone = (id) => {
    dispatch(markDone({ id }));
  };

  // this is utility function
  // this function will return only name of task since "tasks" contain couple of properties
  const getNames = () => {
    let names;
    names = tasks.map((item, index) => item.name);
    return names;
  };

  // this useEffect only run once at the starting of app since its dependency is empty
  useEffect(() => {
    // as soon as app starts it will fetch previous tasks if theres any and stores it in "prevList"
    let prevList = localStorage.getItem("todo-list");
    if (prevList) {
      // since the data we get from localstorage will be in string , this will need to convert that in array
      let prevTask = JSON.parse(prevList);
      // for every task in the array, it will dispatch an action and will stores it in redux store.
      for (let i = 0; i < prevTask.length; ++i) {
        dispatch(addTask(prevTask[i]));
      }
    }
  }, []);

  // this useEffect will run on every "tasks" variable change, since we passed tasks in dependency array
  useEffect(() => {
    // stroring only name of tasks in "prevTask" variable
    let prevTask = getNames();
    // since localstorage stores data in string format, and our "prevTask" contain task's names in array format, we will need to coonvert that array in string
    // this will convert our array in string
    let stringifiedNames = JSON.stringify(prevTask);
    // storing all name of tasks in localstorage with key "todo-List"
    localStorage.setItem("todo-list", stringifiedNames);
  }, [tasks]);

  return (
    <div className="list-container">
      {" "}
      <ul className="list">
        {tasks.map((task) => (
          <div className="list-item-wrapper" key={task.id}>
            <li
              key={task.id}
              className={`list-item ${task.isCompleted ? "completed" : ""}`}
            >
              {task.name}
              <div className="btn-wrapper">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task.id)}
                >
                  <DeleteOutlineOutlinedIcon />
                </button>
                <button
                  className="mark-done-btn"
                  onClick={() => handleMarkDone(task.id)}
                >
                  <CheckTwoToneIcon />
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
