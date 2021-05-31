import { createStore } from "redux";
import { MainReducer } from "./reducer";

const Store = createStore(MainReducer);

export default Store;
