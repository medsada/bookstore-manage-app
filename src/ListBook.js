import { useState, useEffect } from "react";
import MemorisedBook from "./Book";
import Pagine from "./Pagine";
import ModalDetail from "./ModalDetail";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

function ListBook() {
  const [numShow, setNumShow] = useState(6);
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [inputModal, setInputModal] = useState({});
  const dispatch = useDispatch();
  let books = useSelector((state) => state.books.books);
  const ca = useSelector((state) => state.category.category);
  if (ca !== "toutes") {
    let filteredBooks = books.filter((book) => {
      return book.category === ca;
    });
    if (filteredBooks.length === 0) {
      dispatch({ type: "SET_CATEGORY", payload: "toutes" });
    }
    books = filteredBooks;
  }
  useEffect(() => {
    setIndex(0);
  }, [ca]);
  const length = Math.ceil(books.length / numShow);

  const handleChange = (e) => {
    setNumShow(e.target.value);
  };

  const indexing = (i) => {
    setIndex(i);
  };
  const closeModal = () => {
    setModal(false);
  };
  const openModal = (id) => {
    setInputModal(
      books.find((book) => {
        return book.id === id;
      })
    );
    setModal(true);
  };

  const listedBooks = books.slice(index * numShow, (index + 1) * numShow);

  return (
    <>
      {modal && <ModalDetail closeModel={closeModal} {...inputModal} />}
      <div className="bordered p-2">
        <div className="m-2 pl-5 d-flex justify-content-between flex-wrap">
          <h3 className="" style={{ color: "rgb(127, 59, 127)" }}>
            Livres en Stock :
          </h3>
          <h4>
            Affichez par :
            <input
              className="ml-2"
              value={numShow}
              onChange={handleChange}
              type="number"
              step="2"
              min="2"
              max={books.length}
            />
          </h4>
        </div>

        <div className="row items">
          {listedBooks.map((book) => {
            return (
              <MemorisedBook
                key={book.id}
                dispatch={dispatch}
                openModal={openModal}
                {...book}
              />
            );
          })}
        </div>
        {numShow >= books.length || (
          <Pagine
            indexing={indexing}
            length={length}
            index={index}
            numShow={numShow}
          />
        )}
      </div>
    </>
  );
}

export default ListBook;
