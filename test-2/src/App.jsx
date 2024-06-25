import { useSelector } from "react-redux";
import AddTaskComponent from "./components/AddTaskComponent";
import Todos from "./components/Todos";
import { useEffect, useMemo, useState } from "react";
import Paginate from "./components/Paginate";

function App() {
  const todos = useSelector((state) => state.todos);
  const [page, setPage] = useState(JSON.parse(localStorage.getItem("page")) || 0);
  const n = 6;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filterData = useMemo(() => {
    return todos.filter((_, index) => {
      return (index >= page * n) & (index < (page + 1) * n);
    });
  }, [page, todos]);

  useEffect(() => {
    if (page > 0 && page > Math.ceil(todos.length / n - 1)) {
      setPage(Math.ceil(todos.length / n - 1));
    }
  }, [todos, page]);
  
  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page])

  return (
    <>
      <AddTaskComponent />
      <Todos data={filterData} />
      {todos.length > n && <Paginate page={page} n={n} setPage={setPage} />}
    </>
  );
}

export default App;
