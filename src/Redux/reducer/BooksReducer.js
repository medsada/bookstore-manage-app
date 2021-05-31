import data from "../../data";
const initial = {
  books: data,
};

export const BooksReducer = (state = initial, action) => {
  if (action.type === "ADD_BOOK") {
    return { ...state, books: [...state.books, action.payload] };
  }
  if (action.type === "EDIT_BOOK") {
    return {
      ...state,
      books: state.books.map((book) => {
        return book.id === action.payload.id ? action.payload : book;
      }),
    };
  }
  if (action.type === "DELETE_BOOK") {
    return {
      ...state,
      books: state.books.filter((book) => {
        return book.id !== action.payload;
      }),
    };
  }
  if (action.type === "MINUS_BOOK") {
    const id = action.payload;
    let newBook = state.books.find((book) => {
      return id === book.id;
    });
    if (newBook.stock === 0) {
      return state;
    }

    newBook.stock = newBook.stock - 1;

    let newSavedBooks = state.books.map((book) => {
      return book.id === id ? newBook : book;
    });
    return {
      ...state,
      books: newSavedBooks,
    };
  }
  if (action.type === "PLUS_BOOK") {
    const id = action.payload;
    let newBook = state.books.find((book) => {
      return id === book.id;
    });

    newBook.stock = newBook.stock + 1;

    let newSavedBooks = state.books.map((book) => {
      return book.id === id ? newBook : book;
    });
    return {
      ...state,
      books: newSavedBooks,
    };
  }

  return state;
};
