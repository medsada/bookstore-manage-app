import React from "react";
import ListBook from "./ListBook";
import FilterBook from "./FilterBook";
import { Link } from "react-router-dom";

function Home({
  allCategory,
  handleFilter,
  books,
  handleDelete,
  handleMinusStock,
  handlePlusStock,
}) {
  return (
    <>
      <div>
        <Link className="card-link btn btn-primary my-2" to="/PageForm/new">
          Ajouter un nouveau livre
        </Link>
      </div>

      <FilterBook allCategory={allCategory} handleFilter={handleFilter} />
      <ListBook
        books={books}
        handleDelete={handleDelete}
        handleMinusStock={handleMinusStock}
        handlePlusStock={handlePlusStock}
      />
    </>
  );
}

export default Home;
