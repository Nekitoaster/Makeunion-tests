import { BiTaskX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTask, todoToggled } from "../stores/todosSlice";

function TodoItem({ props }) {
  const { text, completed, id } = props;

  const dispatch = useDispatch();

  const checkboxToggle = () => {
    dispatch(
      todoToggled({
        id,
      })
    );
    console.log(completed);
  };

  const removeTask = () => {
    dispatch(
      deleteTask({
        id,
      })
    );
  };
  return (
    <div
      className={"todo-item-container" + " " + (completed ? "green-bcg" : "")}
    >
      <div className="todo-item-container__text">{text}</div>
      <label className="todo-item-container__completed">
        Выполнено
        <input
          checked={completed}
          onChange={checkboxToggle}
          className="complited__checkbox"
          type="checkbox"
        />
      </label>
      <button
        onClick={() => {
          removeTask();
        }}
        className="todo-item-container__del"
      >
        <BiTaskX />
      </button>
    </div>
  );
}

export default TodoItem;
