import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteItemFromCart, fetchItemsByUserId, resetCart, updateCart } from './cartAPI';
const initialState = {
  status: 'idle',
  items: [],
  cartLoaded: false
};
export const addToCartAsync = createAsyncThunk(
  'cart/addToCart',
    async ({item, alert}) => {
    const response = await addToCart(item);
    alert.success('Item Added to Cart');
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchItemsByUserIdAsync = createAsyncThunk(
  'cart/fetchItemsByUserId',
  async () => {
