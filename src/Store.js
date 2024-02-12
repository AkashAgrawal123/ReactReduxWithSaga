import { configureStore } from "@reduxjs/toolkit";
import rootRedcuer from "./Services/Reducer";
import productSaga from "./Services/Saga/ProductSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootRedcuer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);
export default store;
