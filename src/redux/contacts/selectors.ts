import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Contact = {
  id: string;
  name: string;
  number: string;
}; 


export const selectContacts = (state:RootState) => state.contacts.items;

export const selectIsLoading = (state:RootState) => state.contacts.isLoading;

export const selectError = (state: RootState) => state.contacts.error;

export const selectFilter = (state: RootState) => state.filter.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts: Contact[], filter:string) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
