import React from "react";

function FilterBook({ allCategory, handleFilter, value }) {
  return (
    <div className="items my-1">
      <strong> Filtrez par catégorie : </strong>
      {allCategory.map((ca, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`btn btn-dark m-1 card-link ${
              index === value && "active"
            }`}
            onClick={() => handleFilter(ca, index)}
          >
            {ca}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBook;
