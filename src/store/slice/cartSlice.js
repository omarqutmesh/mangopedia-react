import { createSlice } from "@reduxjs/toolkit";
const STORAGE_KEY_CART = "cart-mango";
const getStoredCart = () => {
  try {
    const cart = localStorage.getItem(STORAGE_KEY_CART);
    const parsed = cart ? JSON.parse(cart) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(STORAGE_KEY_CART);
    return [];
  }
};
