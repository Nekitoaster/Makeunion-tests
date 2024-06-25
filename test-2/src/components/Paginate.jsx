import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

function Paginate({ n, setPage, page }) {
  const todos = useSelector((state) => state.todos);

  const onPageChange = (event) => {
    setPage(event.selected);
      console.log(page)
  };

  return (
    <div>
      <ReactPaginate
        forcePage={page}
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        activeClassName={"active"}
        onPageChange={onPageChange}
        pageCount={Math.ceil(todos.length / n)}
        breakLabel="..."
        previousLabel={
          <button className="paginate-arrow">
            <GrFormPreviousLink />
          </button>
        }
        nextLabel={
          <button className="paginate-arrow">
            <GrFormNextLink />
          </button>
        }
      />
      ;
    </div>
  );
}

export default Paginate;
