//import action types
import { ADD_CHAR_TO_TABLE, ADD_TO_FAVORITES } from "./actions";
import { REMOVE_FROM_FAVORITES, REMOVE_CHAR_FROM_TABLE } from "./actions";
import { SET_LOGIN, CLEAR_TABLE } from "./actions";

const initialState = {
  logedin: false,
  myFavorites: [], //array de chars
  charsOnTable: [], //array de chars
};

const reducer = (stateG = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...stateG,
        logedin: true,
      };

    case ADD_TO_FAVORITES:
      console.log(`adicionando el ${action.payload}`);
      return {
        ...stateG,
        myFavorites: [...stateG.myFavorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...stateG,
        myFavorites: stateG.myFavorites.filter(
          (elem) => elem.id !== action.payload
        ),
      };
    case ADD_CHAR_TO_TABLE:
      return {
        ...stateG,
        charsOnTable: [...stateG.charsOnTable, action.payload],
      };
    case REMOVE_CHAR_FROM_TABLE:
      return {
        ...stateG,
        charsOnTable: stateG.charsOnTable.filter(
          (elem) => elem.id !== action.payload
        ),
      };
    case CLEAR_TABLE:
      return {
        ...stateG,
        charsOnTable: [],
      };
    default:
      return { ...stateG };
  }
};
export default reducer;
