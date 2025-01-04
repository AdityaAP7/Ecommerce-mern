import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteItemFromCart, fetchItemsByUserId, resetCart, updateCart } from './cartAPI';
const initialState = {
  status: 'idle',
  items: [],
  cartLoaded: false
};
