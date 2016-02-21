import {
  SORT_LIST_NAME,
  SORT_LIST_PRICE
} from "../actionTypes/shopActionTypes";

export function sortListName(products) {
  return {
    type: SORT_LIST_NAME,
    //payload: { products }
  };
}

export function sortListPrice(products) {
  return {
    type: SORT_LIST_PRICE,
    //payload: { products }
  };
}