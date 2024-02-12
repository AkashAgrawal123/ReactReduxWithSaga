import { PRODUCT_LIST } from "../Constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log(action, "list");
      return [action.data];
    default:
      return data;
  }
};
