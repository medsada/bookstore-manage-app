import React from "react";

function ListBook({
  books,
  handleDelete,
  handleEdit,
  handleMinusStock,
  handlePlusStock,
}) {
  return (
    <div className="bordered p-2">
      <h3 className="h3 m-2 pl-5" style={{ color: "rgb(127, 59, 127)" }}>
        Livres en Stock :
      </h3>
      <div className="row items">
        {books.map((book) => {
          const { id, title, category, autor, price, stock } = book;
          return (
            <article key={id} className="col-10 col-sm-5 card m-3">
              <div className="card-body ">
                <h4 className="card-title">
                  Titre : <strong>{title}</strong>
                </h4>
                <div className="mt-3 flexitems">
                  <h5 className="mr-4 my-1">Catégorie : {category}</h5>
                  <h5 className="card-subtitle my-1">
                    <strong> Auteur : </strong> {autor}
                  </h5>
                </div>
                <div className="mb-3 flexitems">
                  <h5 className="mr-4 my-1">Prix : {price}</h5>
                  <h5 className="card-subtitle my-1">
                    <strong> Stock disponible : </strong>
                    <span>
                      <button
                        name="minus"
                        className="btn btn-primary btn-sm mr-1"
                        onClick={() => handleMinusStock(id)}
                      >
                        -
                      </button>
                      {stock}
                      <button
                        name="plus"
                        className="btn btn-primary btn-sm ml-1"
                        onClick={() => handlePlusStock(id)}
                      >
                        +
                      </button>
                    </span>
                  </h5>
                </div>

                <footer className="flexitems">
                  <button type="button" className="card-link btn btn-primary">
                    Détails
                  </button>
                  <button
                    type="button"
                    className="card-link btn btn-info"
                    onClick={() => handleEdit(id)}
                  >
                    Modifier
                  </button>
                  <button
                    type="button"
                    className="card-link btn btn-danger"
                    onClick={() => handleDelete(id)}
                  >
                    Supprimer
                  </button>
                </footer>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default ListBook;
