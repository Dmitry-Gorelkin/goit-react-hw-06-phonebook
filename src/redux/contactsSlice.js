import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: (state, actions) => {
      return { items: [...state.items, actions.payload] };
    },
    delContact: (state, actions) => {
      return { items: state.items.filter(item => item.id !== actions.payload) };
    },
  },
});

export const { addContact, delContact } = contactsSlice.actions;
