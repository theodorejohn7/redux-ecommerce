import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore(
  { reducer: reducers },
  devTools
);

 
export default store;
