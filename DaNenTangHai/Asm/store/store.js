import { configureStore } from '@reduxjs/toolkit';

import registerReducer from '../../Asm/reducer/registerSlice';
import loginReducer from '../../Asm/reducer/loginSlice';
import productReducer from '../../Asm/reducer/ProductSlice';
import detailReducer from '../../Asm/reducer/detailSlice';
import getdetailReducer from '../../Asm/reducer/categorySlice';
import getParentReducer from '../../Asm/reducer/cateParentSlice';
import getAllCateReducer from '../../Asm/reducer/categoryGetallSlice';
import getByTypeProReducer from '../../Asm/reducer/productByType';
import getCartReducer from '../../Asm/reducer/cartSlice';
import getCartDeReducer from '../../Asm/reducer/itemCart';
import addCartDeReducer from '../../Asm/reducer/cartAdd';
import minusReducer from '../../Asm/reducer/minusCart';
import deleteCartReducer from '../../Asm/reducer/deleteCart';
import addBillReducer from '../../Asm/reducer/addBill';
import ListBillReducer from '../../Asm/reducer/billListSlice';
import deleteAllCartReducer from '../../Asm/reducer/removeCart';
import updateUserReducer from '../../Asm/reducer/updateUserSlice';
import findUserReducer from '../../Asm/reducer/findUser';
import searchProductReducer from '../../Asm/reducer/searchProduct';
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



