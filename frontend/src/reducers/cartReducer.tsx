import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

// @ts-ignore
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        // @ts-ignore
        (cartItem) => cartItem.product === item.product
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            // @ts-ignore
            cartItem.product === existItem.product ? item : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          // @ts-ignore
          (cartItem) => cartItem.product !== action.payload
          //過濾那些 id !== action.payload  剩下來就會是你要刪掉那個
        ),
      };

    default:
      return state;
  }
};
