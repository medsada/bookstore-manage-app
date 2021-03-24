import React, { useState, useEffect } from "react";

function Myform({ Category, closeForm, submitHandle, dataImputs }) {
  const [newCategory, setNewCategory] = useState(false);
  const [imputs, setImputs] = useState(dataImputs);
  const [require, setRequire] = useState(true);

  useEffect(() => {
    if (
      imputs.title !== "" &&
      imputs.description !== "" &&
      imputs.category !== "" &&
      imputs.price !== 0
    ) {
      setRequire(false);
    } else {
      setRequire(true);
    }
  }, [imputs]);

  const handleChange = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    if (nam === "price" || nam === "stock") {
      val = parseInt(e.target.value);

      console.log(val);
      if (val < 0) {
        return;
      }
    }

    setImputs({ ...imputs, [nam]: val });
    console.log(imputs);
  };

  const handleCheck = (e) => {
    setNewCategory(e.target.checked);
  };

  return (
    <div className="bordered my-3 p-2">
      <form className="m-2">
        <div>
          <h3>
            Formulaire : <span></span>
          </h3>
        </div>
        <div class="form-row my-3">
          <div className="form-group m-3 col-md-4">
            <label forName="title">Titre :</label>
            <input
              value={imputs.title}
              type="text"
              class="form-control"
              name="title"
              id="title"
              onChange={handleChange}
            />
          </div>
          <div className="form-group m-3 col-md-4">
            <label forName="autor">Auteur :</label>
            <input
              value={imputs.autor}
              type="text"
              class="form-control"
              name="autor"
              id="autor"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="form-row my-3">
          <div className="form-group m-3 col-md-4">
            <label forName="title">Prix :</label>
            <input
              value={imputs.price}
              type="number"
              class="form-control"
              name="price"
              id="price"
              onChange={handleChange}
            />
          </div>
          <div className="form-group m-3 col-md-4">
            <label forName="autor">Stock :</label>
            <input
              value={imputs.stock}
              type="number"
              class="form-control"
              name="stock"
              id="stock"
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group form-check mx-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="check"
              aria-describedby="check-help"
              onChange={handleCheck}
            />
            <label class="form-check-label" forName="exampleCheck1">
              Nouvelle Catégorie
            </label>
            <small id="check-help" class="form-text text-muted">
              Cochez pour ajouter une nouvelle categorie.
            </small>
          </div>
          {newCategory ? (
            <div class="form-group mx-2">
              <label forName="name">Catégorie :</label>
              <input
                value={imputs.category}
                type="text"
                class="form-control"
                name="category"
                id="category"
                onChange={handleChange}
              />
            </div>
          ) : (
            <div class="form-group col-3 mx-3">
              <label for="Category">Catégorie</label>
              <select
                name="category"
                id="Category"
                class="form-control"
                value={imputs.Category}
                onChange={handleChange}
              >
                {Category.filter((ca) => {
                  return "toutes" !== ca;
                }).map((ca, index) => {
                  return (
                    <option
                      key={index}
                      value={ca}
                      selected={ca === imputs.category}
                    >
                      {ca}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>
        <div class="form-group">
          <label forName="description">Déscription :</label>
          <textarea
            value={imputs.description}
            class="form-control"
            name="description"
            id="description"
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          class=" mr-2 btn btn-primary"
          onClick={() => submitHandle(imputs)}
          disabled={require}
        >
          Valider
        </button>
        <button className="btn btn-danger" onClick={closeForm}>
          Annuler
        </button>
      </form>
    </div>
  );
}

export default Myform;
