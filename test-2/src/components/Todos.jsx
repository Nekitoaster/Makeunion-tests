import TodoItem from './TodoItem';

function Todos({ data }) {
  return (
    <div className="todos-container">
      {data.map((item) => {
        return <TodoItem key={item.id} props={item} />;
      })}
    </div>
  );
}

export default Todos;
