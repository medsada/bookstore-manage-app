import React from "react";
import ListBook from "./ListBook";
import FilterBook from "./FilterBook";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link className="card-link btn btn-primary my-2" to="/PageForm/new">
        Ajouter un nouveau livre
      </Link>

      <FilterBook />
      <ListBook />
    </>
  );
}

export default Home;
