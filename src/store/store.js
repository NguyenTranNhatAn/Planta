import { configureStore } from '@reduxjs/toolkit';

import registerReducer from '../reducers/registerSlice';
import loginReducer from '../reducers/loginSlice';
import productReducer from '../reducers/ProductSlice';
import detailReducer from '../reducers/detailSlice';
import getdetailReducer from '../reducers/categorySlice';
import getParentReducer from '../reducers/cateParentSlice';
import getAllCateReducer from '../reducers/categoryGetallSlice';
import getByTypeProReducer from '../reducers/productByType';
import getCartReducer from '../reducers/cartSlice';
import getCartDeReducer from '../reducers/itemCart';
import addCartDeReducer from '../reducers/cartAdd';
import minusReducer from '../reducers/minusCart';
import deleteCartReducer from '../reducers/deleteCart';
import addBillReducer from '../reducers/addBill';
import ListBillReducer from '../reducers/billListSlice';
import deleteAllCartReducer from '../reducers/removeCart';
import updateUserReducer from '../reducers/updateUserSlice';
import findUserReducer from '../reducers/findUser';
import searchProductReducer from '../reducers/searchProduct';
export const store = configureStore({

  reducer: {
    register: registerReducer,
    login: loginReducer,
    product: productReducer,
    detail: detailReducer,
    category: getdetailReducer,
    parent: getParentReducer,
    cateGetAll: getAllCateReducer,
    proByType: getByTypeProReducer,
    cart: getCartReducer,
    cartDetail: getCartDeReducer,
    addCart: addCartDeReducer,
    minusCart: minusReducer,
    deleteCart: deleteCartReducer,
    addBill: addBillReducer,
    listBill: ListBillReducer,
    removeCart: deleteAllCartReducer,
    updateUser: updateUserReducer,
    findUser: findUserReducer,
    search: searchProductReducer,
  },
});



