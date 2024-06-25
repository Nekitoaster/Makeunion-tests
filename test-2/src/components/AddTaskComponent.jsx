import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { todoAdded } from "../stores/todosSlice";

function AddTaskComponent() {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  function onClick(e) {
    e.preventDefault();
    if (todoValue.trim()) {
      const task = {
        id: uuidv4(),
        text: todoValue.trim(),
      };
      dispatch(todoAdded(task));
      setTodoValue("");
    } else {
      alert('Введите корректные данные')
      setTodoValue("");
    }
  }

  return (
    <div className="add-task-container">
      <form className="add-task-container__input-box">
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
          placeholder='Название'
          className="input-box__input"
          type="text"
        />
        <button onClick={onClick} className="input-box__button" type="submit">
          <IoMdAddCircle />
        </button>
      </form>
    </div>
  );
}

export default AddTaskComponent;
