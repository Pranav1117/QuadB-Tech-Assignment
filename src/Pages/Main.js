import AddTodo from "../Components/AddTodo/AddTodo";
import TodoList from "../Components/TodoList/TodoList";
import "./main.css";
const Main = () => {
  return (
    <div className="main-container">
      <AddTodo />
      <TodoList/>
    </div>
  );
};

export default Main;
