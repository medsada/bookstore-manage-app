import React, { useState } from "react";

function FilterBook({ allCategory, handleFilter }) {
  const [activeValue, setActiveValue] = useState(0);
  console.log(activeValue);
  const handle = (ca, index) => {
    setActiveValue(index);
    handleFilter(ca);
  };
  return (
    <div className="items filt my-1">
      <strong> Filtrez par catégorie : </strong>
      {allCategory.map((ca, index) => {
        console.log(index);
        return (
          <button
            key={index}
            type="button"
            className={`btn btn-dark card-link m-1  ${
              index === activeValue && "isactiveted"
            }`}
            onClick={() => handle(ca, index)}
          >
            {ca}
          </button>
        );
      })}
    </div>
  );
}

export default FilterBook;
