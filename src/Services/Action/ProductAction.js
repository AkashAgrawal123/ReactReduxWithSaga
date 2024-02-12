import { SEARCH_PRODUCT, PRODUCT_LIST } from "../Constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};

export const searchProduct = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query,
  };
};
