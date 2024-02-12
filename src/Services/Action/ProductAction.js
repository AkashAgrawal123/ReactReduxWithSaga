import { PRODUCT_LIST } from "../Constant/PRODUCT_LIST";

export const productList = () => {
  let data = "hello";

  console.log("data", data);
  return {
    type: PRODUCT_LIST,
    data,
  };
};
