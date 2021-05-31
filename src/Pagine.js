import React from "react";

const Pagine = ({ indexing, index, length, numShow }) => {
  return (
    <div className="mt-4 ml-4">
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-lg">
          {index === 0 || (
            <li className="page-item">
              <button className="page-link" onClick={() => indexing(index - 1)}>
                Precedent
              </button>
            </li>
          )}

          {[...Array(length)].map((o, i) => {
            return (
              <li key={i} className={`page-item  ${index === i && "active"}`}>
                <button className="page-link" onClick={() => indexing(i)}>
                  {i + 1}
                </button>
              </li>
            );
          })}
          {index === length - 1 || (
            <li className="page-item">
              <button className="page-link" onClick={() => indexing(index + 1)}>
                Suivant
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagine;
