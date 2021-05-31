import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function FilterBook() {
  const activeValue = useSelector((state) => state.category.category);
  const books = useSelector((state) => state.books.books);
  const allCategory = [
    "toutes",
    ...new Set(books.map((item) => item.category)),
  ];
  const dispatch = useDispatch();
  const handle = (ca) => {
    dispatch({ type: "SET_CATEGORY", payload: ca });
  };
  return (
    <div className="items filt my-1">
      <strong> Filtrez par catégorie : </strong>
      {allCategory.map((ca, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`btn btn-dark card-link m-1  ${
              ca === activeValue && "isactiveted"
            }`}
            onClick={() => handle(ca)}
          >
            {ca}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBook;
