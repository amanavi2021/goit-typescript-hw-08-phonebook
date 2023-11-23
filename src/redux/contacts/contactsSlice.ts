import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';


export type Contact = {
    id: string;
    name: string;
    number: string;
}; 

interface ContactsState {
    items: Contact[],
    isLoading: boolean;
    error: string;
}

const initialState: ContactsState = {
    items: [],
    isLoading: false,
    error: ""
};

const handlePending = (state: ContactsState) => {
    state.isLoading = true;
};

const handleRejected = (state: ContactsState, action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: {
         [fetchContacts.pending.toString()]: handlePending,
        [fetchContacts.fulfilled.toString()] (state, action: PayloadAction<Contact[]>) {
            state.isLoading = false;
            state.error = "";
            state.items = action.payload;
        },
        [fetchContacts.rejected.toString()]: handleRejected,
        [addContact.pending.toString()]:handlePending,
        [addContact.fulfilled.toString()] (state, action: PayloadAction<Contact>) {
            state.isLoading = false;
            state.error = "";
            state.items = [...state.items, action.payload]
        },
        [addContact.rejected.toString()]: handleRejected,
        [deleteContact.pending.toString()]: handlePending,
        [deleteContact.fulfilled.toString()] (state, action: PayloadAction<Contact>) {
            state.isLoading = false;
            state.error = "";
            state.items = state.items.filter(contact => contact.id !== action.payload.id)
        },
        [deleteContact.rejected.toString()]: handleRejected,


    },

});

export const contactsReducer = contactsSlice.reducer;