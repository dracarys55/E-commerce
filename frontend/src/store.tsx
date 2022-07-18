import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const cartItemFromStorage = localStorage.getItem('cartItems')
  ? // @ts-ignore
    JSON.parse(localStorage.getItem('cartItems'))
  : [];
const initialState = {
  cart: { cartItems: cartItemFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  // @ts-ignore
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
//第三個參數使用redux-devtools-extension 變得更簡單
// ...operator 甚麼意思

export default store;
