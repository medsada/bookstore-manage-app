import React, { memo } from "react";
import { Link } from "react-router-dom";

const Book = ({
  openModal,
  dispatch,
  id,
  title,
  category,
  autor,
  price,
  stock,
}) => {
  return (
    <article className="col-10 col-md-5 card m-3">
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
          <h5 className="card-subtitle my-1 stock">
            <strong> Stock disponible : </strong>
            <span>
              <button
                name="minus"
                className="btn btn-primary btn-sm mr-1"
                onClick={() => dispatch({ type: "MINUS_BOOK", payload: id })}
              >
                -
              </button>
              {stock}
              <button
                name="plus"
                className="btn btn-primary btn-sm ml-1"
                onClick={() => dispatch({ type: "PLUS_BOOK", payload: id })}
              >
                +
              </button>
            </span>
          </h5>
        </div>

        <footer className="flexitems">
          <div>
            <button
              type="button"
              className="card-link btn btn-primary m-1"
              onClick={() => openModal(id)}
            >
              Détails
            </button>
            <Link
              type="button"
              className="card-link btn btn-info m-1"
              to={`/PageForm/${id}`}
            >
              Modifier
            </Link>
          </div>
          <button
            type="button"
            className="card-link btn btn-danger m-1"
            onClick={() => dispatch({ type: "DELETE_BOOK", payload: id })}
          >
            Supprimer
          </button>
        </footer>
      </div>
    </article>
  );
};

const MemorisedBook = memo(Book);

export default MemorisedBook;
