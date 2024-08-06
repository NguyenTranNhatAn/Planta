import { configureStore } from '@reduxjs/toolkit';

import registerReducer from '../reducer/registerSlice';
import loginReducer from '../reducer/loginSlice';
import productReducer from '../reducer/ProductSlice';
import detailReducer from '../reducer/detailSlice';
import getdetailReducer from '../reducer/categorySlice';
import getParentReducer from '../reducer/cateParentSlice';
import getAllCateReducer from '../reducer/categoryGetallSlice';
import getByTypeProReducer from '../reducer/productByType';
import getCartReducer from '../reducer/cartSlice';
import getCartDeReducer from '../reducer/itemCart';
import addCartDeReducer from '../reducer/cartAdd';
import minusReducer from '../reducer/minusCart';
import deleteCartReducer from '../reducer/deleteCart';
import addBillReducer from '../reducer/addBill';
import ListBillReducer from '../reducer/billListSlice';
import deleteAllCartReducer from '../reducer/removeCart';
import updateUserReducer from '../reducer/updateUserSlice';
import findUserReducer from '../reducer/findUser';
import searchProductReducer from '../reducer/searchProduct';
export const store = configureStore({
  
  reducer: {
    register: registerReducer,
    login: loginReducer,
    product: productReducer,
    detail : detailReducer,
    category : getdetailReducer,
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



