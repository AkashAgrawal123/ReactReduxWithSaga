import { configureStore } from "@reduxjs/toolkit";
import rootRedcuer from "./Services/Reducer";

const store = configureStore({
  reducer: rootRedcuer,
});

export default store;
