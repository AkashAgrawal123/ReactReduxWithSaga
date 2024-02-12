import { takeEvery, put } from "redux-saga/effects";
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "../Constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3000/products");
  data = yield data.json();
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  let searchResult = yield fetch(
    `http://localhost:3000/products?q=${data.query}`
  );
  searchResult = yield searchResult.json();
  console.log("searched data", data);
  yield put({ type: SET_PRODUCT_LIST, data: searchResult });
}

const ProductSaga = function* () {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts);
};

export default ProductSaga;
