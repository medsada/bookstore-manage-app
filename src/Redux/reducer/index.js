import { combineReducers } from "redux";
import { BooksReducer } from "./BooksReducer";
import { CategoryReducer } from "./CategoryReducer";
// import { PatientReducer } from "./PatientReducer";
// import { TraitementReducer } from "./TraitementReducer";
export const MainReducer = combineReducers({
  books: BooksReducer,
  category: CategoryReducer,
});
