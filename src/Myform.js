import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Myform({
  Category,
  submitHandle,
  isAdd = true,
  dataImputs = {
    category: "",
    autor: "",
    price: 0,
    stock: 0,
    title: "",
    description: "",
  },
}) {
  const [newCategory, setNewCategory] = useState(false);
  const [imputs, setImputs] = useState(dataImputs);
  const [require, setRequire] = useState(true);
  const history = useHistory();

  useEffect(() => {
    if (
      imputs.title !== "" &&
      imputs.autor !== "" &&
      imputs.description !== "" &&
      imputs.category !== "" &&
      imputs.price > 0
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

  const submiting = () => {
    submitHandle(imputs, isAdd);
    history.push("/");
  };

  return (
    <div className="bordered my-3 p-2">
      <form className="m-2">
        <div className="d-flex flex-wrap">
          <h3>Formulaire :</h3>{" "}
          <div className="d-flex flex-fill justify-content-center">
            <h4
              className={`rounded-pill border border-2 p-2 px-3 ${
                isAdd ? "border-primary text-primary" : "border-info text-info"
              }`}
            >
              {isAdd ? "Ajouter un nouveau livre" : "Modifiez votre livre"}
            </h4>
          </div>
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
              className="form-check-input"
              id="check"
              name="check"
              aria-describedby="check-help"
              onChange={handleCheck}
            />
            <label className="form-check-label" forName="check">
              Nouvelle Catégorie
            </label>
            <small id="check-help" class="form-text text-muted">
              Cochez pour ajouter une nouvelle categorie.
            </small>
          </div>
          {newCategory ? (
            <div class="form-group mx-2 col-md-3">
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
            <div class="form-group mx-2 col-md-3">
              <label for="Category">Catégorie</label>
              <select
                name="category"
                id="Category"
                class="form-control"
                value={imputs.Category}
                onChange={handleChange}
              >
                <option>Choisir ...</option>
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
        <div className="form-group">
          <label forName="description">Déscription :</label>
          <textarea
            value={imputs.description}
            className="form-control"
            name="description"
            id="description"
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          class=" mr-2 btn btn-primary"
          onClick={() => submiting()}
          disabled={require}
        >
          Valider
        </button>
        <Link className="btn btn-danger" to="/">
          Annuler
        </Link>
      </form>
    </div>
  );
}

export default Myform;
