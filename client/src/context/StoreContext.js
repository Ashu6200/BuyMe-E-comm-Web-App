import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  wish: {
    wishItems: localStorage.getItem("wishItems")
      ? JSON.parse(localStorage.getItem("wishItems"))
      : [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newItem = action.payload;
      const existsItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existsItem
        ? state.cart.cartItems.map((item) =>
          item._id === existsItem._id ? newItem : item
        )
        : [...state.cart.cartItems, newItem];
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
        },
      };
    }

    case "REMOVE_FROM_CART": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems,
        },
      };
    }
    case "ADD_TO_WISH": {
      const newItem = action.payload;
      const existsItem = state.wish.wishItems.find(
        (item) => item._id === newItem._id
      );
      const wishItems = existsItem
        ? state.wish.wishItems.map((item) =>
          item._id === existsItem._id ? newItem : item
        )
        : [...state.wish.wishItems, newItem];
      localStorage.setItem("wishItems", JSON.stringify(wishItems));
      return {
        ...state,
        wish: {
          ...state.wish,
          wishItems,
        },
      };
    }

    case "REMOVE_FROM_WISH": {
      const wishItems = state.wish.wishItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("wishItems", JSON.stringify(wishItems));
      return {
        ...state,
        wish: {
          ...state.wish,
          wishItems,
        },
      };
    }

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };

  return <Store.Provider value={value}> {props.children} </Store.Provider>;
}
