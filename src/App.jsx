import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import CartItem from "./Components/CartItem";
import { Provider } from "react-redux";
import store from './Store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart-item" element={<CartItem />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
