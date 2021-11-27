import React from "react";

const ModalDetail = ({
  closeModel,
  title,
  category,
  autor,
  price,
  stock,
  description,
}) => {
  console.log("hahaha");
  return (
    <div className="modal show-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="close"
              onClick={() => closeModel()}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="my-2 flexitems">
              <h5 className="mr-4 my-1">Catégorie : {category}</h5>
              <h5 className="card-subtitle my-1">
                <strong> Auteur : </strong> {autor}
              </h5>
            </div>
            <p>{description}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => closeModel()}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
