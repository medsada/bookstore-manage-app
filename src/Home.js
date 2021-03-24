import React from "react";
import ListBook from "./ListBook";
import FilterBook from "./FilterBook";
import Myform from "./Myform";

function Home({
  imputBook,
  allCategory,
  handleFilter,
  books,
  handleDelete,
  handleEdit,
  handleMinusStock,
  handlePlusStock,
  value,
  showForm,
  isAdd,
  openNewForm,
  closeForm,
  submitHandle,
}) {
  return (
    <>
      {!showForm && (
        <div>
          <button
            className="card-link btn btn-primary my-2"
            onClick={openNewForm}
          >
            Ajouter un nouveau livre
          </button>
        </div>
      )}
      {showForm && (
        <Myform
          Category={allCategory}
          closeForm={closeForm}
          submitHandle={submitHandle}
          dataImputs={imputBook}
        />
      )}
      <FilterBook
        allCategory={allCategory}
        handleFilter={handleFilter}
        value={value}
      />
      <ListBook
        books={books}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleMinusStock={handleMinusStock}
        handlePlusStock={handlePlusStock}
      />
    </>
  );
}

export default Home;
