import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface Contact {
    name: string;
    number: string;
    id?: string;

}

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
            
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data: Contact, thunkAPI) => {
        try {
            const {name, number} = data;
            const response = await axios.post('/contacts', { name, number });
            return response.data;
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.message);            
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId: string, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error:any) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
);

