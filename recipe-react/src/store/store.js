import {configureStore} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  wishListSlice  from './wishlist/wishListSlice';
import productSlice from './product/productSlice';

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, wishListSlice)
  const productReducer = persistReducer(persistConfig, productSlice)


export const store =configureStore({
  reducer:{
    wishlist: persistedReducer,
    card: productReducer,
  }
});

export const persistor = persistStore(store);