import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, image, cost, price } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, name, image, cost, price, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // state.items = state.items.filter(item => item.name !== action.payload);
      // The code from the current sample solution above doesn't work because it uses action.payload rather than action.payload.name
      // console.log(action.payload);
      // console.log("Name: " + action.payload.name + " ID: " + action.payload.id);
      // console.log(state.items.findIndex((item) => item.id === action.payload.id));

      state.items = state.items.filter(item => item.name !== action.payload.name);
      //state.items.splice(state.items.findIndex((item) => item.id === action.payload.id), 1);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    incrementQuantity: (state, action) => {
      const { name } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const { name } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity--;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
