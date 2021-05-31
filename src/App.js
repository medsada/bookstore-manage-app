import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import MyNav from "./MyNav";
import Home from "./Home";
import PageForm from "./PageForm";
import About from "./About";

import "./style.css";

export default function App() {
  const books = useSelector((state) => state.books.books);

  return (
    <>
      <MyNav length={books.length} />
      <div className="container-md mt-5 pt-4">
        <br />
        <header className="mb-3" style={{ textAlign: "center" }}>
          <h1 className="h1">Gestion de stock de la librairie :</h1>
          <div className="line"></div>
          <br />
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/PageForm/:id">
            <PageForm />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
}
