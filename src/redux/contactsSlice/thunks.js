import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContactApi, deleteContactApi, getAllContactsApi } from "services/apiContacts";

export const fetchAllContactsThunk = createAsyncThunk(
    'contacts/fetchAllContacts',
    async (_, thunkAPI) => {
      try {
        return await getAllContactsApi();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const addContactThunk = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        return await addContactApi(contact);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
export const deleteContactThunk = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        return deleteContactApi(contactId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

