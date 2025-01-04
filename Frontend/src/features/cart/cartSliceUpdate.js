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
    const response = await fetchItemsByUserId();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const updateCartAsync = createAsyncThunk(
  'cart/updateCart',

    async (update) => {
    const response = await updateCart(update);

      // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const deleteItemFromCartAsync = createAsyncThunk(
  'cart/deleteItemFromCart',
  async (itemId) => {
    const response = await deleteItemFromCart(itemId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const resetCartAsync = createAsyncThunk(
  'cart/resetCart',
  async () => {
    const response = await resetCart();
   // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const cartSlice = createSlice({
  name: 'cart',
