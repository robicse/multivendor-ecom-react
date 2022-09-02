import React, { createContext, useContext, useMemo, useReducer } from "react"; // =================================================================================

// =================================================================================
const initialState = {
  isHeaderFixed: false,
  cart: [],
  siteSettingData: null
};
const AppContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item.id !== cartItem.id);
        return { ...state, cart: filteredCart };
      }

      if (exist) {
        const newCart = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, qty: cartItem.qty } : item
        );
        return { ...state, cart: newCart };
      }

      return { ...state, cart: [...cartList, cartItem] };

    case "TOGGLE_HEADER":
      return { ...state, isHeaderFixed: action.payload };

    default: {
      return state;
    }
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
export default AppContext;
