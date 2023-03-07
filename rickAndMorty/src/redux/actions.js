export const SET_LOGIN = "SET_LOGIN";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const ADD_CHAR_TO_TABLE = "ADD_CHAR_TO_TABLE";
export const REMOVE_CHAR_FROM_TABLE = "REMOVE_CHAR_FROM_TABLE";
export const CLEAR_TABLE = "CLEAR_TABLE";

export const setLogin = () => {
  return {
    type: SET_LOGIN,
  };
};
export const addFavorite = (char) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: char,
  };
};
export const removeFavorite = (id) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id,
  };
};
export const addCharToTable = (char) => {
  return {
    type: ADD_CHAR_TO_TABLE,
    payload: char,
  };
};
export const removeCharFromTable = (id) => {
  return {
    type: REMOVE_CHAR_FROM_TABLE,
    payload: id,
  };
};
export const clearTable = () => {
  return {
    type: CLEAR_TABLE,
  }
}
