import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MyNav from "./MyNav";
import Home from "./Home";
import PageForm from "./PageForm";
import About from "./About";
import data from "./data";
import "./style.css";

export default function App() {
  const [savedBooks, setSavedBooks] = useState(data);
  const [books, setBooks] = useState(data);
  const [allCategory, setAllCategory] = useState([
    "toutes",
    ...new Set(savedBooks.map((item) => item.category)),
  ]);

  useEffect(() => {
    const updateCategory = [
      "toutes",
      ...new Set(savedBooks.map((item) => item.category)),
    ];
    setAllCategory(updateCategory);
    setBooks(savedBooks);
  }, [savedBooks]);

  const handleDelete = (id) => {
    const newSavedBooks = savedBooks.filter((book) => {
      return book.id !== id;
    });
    setSavedBooks(newSavedBooks);
  };
  const handleMinusStock = (id) => {
    let newBook = books.filter((book) => {
      return id === book.id;
    })[0];
    if (newBook.stock === 0) {
      return;
    }
    newBook.stock = newBook.stock - 1;

    let newSavedBooks = savedBooks.map((book) => {
      return book.id === id ? newBook : book;
    });

    setSavedBooks(newSavedBooks);
  };
  const handlePlusStock = (id) => {
    let newBook = books.filter((book) => {
      return id === book.id;
    })[0];

    newBook.stock = newBook.stock + 1;

    let newSavedBooks = savedBooks.map((book) => {
      return book.id === id ? newBook : book;
    });
    //newSavedTasks[index] = imputs;
    setSavedBooks(newSavedBooks);
  };

  const handleFilter = (ca) => {
    if (ca === "toutes") {
      setBooks(savedBooks);
      return;
    }
    const newBooks = savedBooks.filter((book) => {
      return book.category === ca;
    });

    setBooks(newBooks);
  };

  const submitHandle = (imputs, isAdd) => {
    if (isAdd) {
      const newBook = { id: new Date().getTime().toString(), ...imputs };
      setSavedBooks([...savedBooks, newBook]);
    } else {
      let newSavedBooks = savedBooks.map((book) => {
        return imputs.id === book.id ? imputs : book;
      });
      setSavedBooks(newSavedBooks);
    }
  };
  return (
    <>
      <MyNav books={books} />
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
            <PageForm
              books={books}
              allCategory={allCategory}
              submitHandle={submitHandle}
            />
          </Route>

          <Route path="/">
            <Home
              allCategory={allCategory}
              handleFilter={handleFilter}
              books={books}
              handleDelete={handleDelete}
              handleMinusStock={handleMinusStock}
              handlePlusStock={handlePlusStock}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}
