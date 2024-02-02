import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "../Constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("I called");
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("item removed");
      const remainingItem = data.filter((item) => item.id !== action.data);
      return [...remainingItem];
    case EMPTY_CART:
      data = [];
      return [...data];
    default:
      return data;
  }
};
