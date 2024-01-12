import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, fetchAllContactsThunk } from "./thunks";

const initialState = {
    contacts: [],
    isLoading: false,
    error: '',
};

// const handlePending = (state)=> {
//   state.isLoading = true;
//   state.error = '';
// }
const handleRejected = (state, action) => {
  state.error = action.error.message;
  state.isLoading = false;
}
const handleFulfilled = (state) => {
  state.error = '';
  state.isLoading = false;
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchAllContactsThunk.pending, (state) => {
            state.isLoading = true;
            state.error = '';
          })
          .addCase(fetchAllContactsThunk.fulfilled, (state, action) => {
            state.contacts = action.payload;
            state.isLoading = false;
          })
          .addCase(addContactThunk.fulfilled, (state, action) => {
            state.contacts = [...state.contacts, action.payload];
          })
          .addCase(deleteContactThunk.fulfilled, (state, action) => {
            state.contacts = state.contacts.filter(item => item.id !== action.payload.id);
          })
          .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
          .addMatcher((action) => action.type.endsWith('/fulfilled'), handleFulfilled)
           // .addCase(fetchAllContactsThunk.rejected, (state, action) => {
          //   state.error = action.error.message;
          // })
           // .addCase(addContactThunk.rejected, (state, action) => {
          //   state.error = action.error.message;
          // })
          // .addCase(deleteContactThunk.rejected, (state, action) => {
          //   state.error = action.error.message;
          // })
          // .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
          
    }
    // reducers: {
    //     addContact:{
    //         prepare: ({name, number}) => {
	// 			const newContact = {
	// 				id: nanoid(),
    //                 name,
    //                 number,
	// 			}
    //             return { payload: newContact }
    //         },
    //         reducer: (state, {payload})=> {
    //         state.contacts.push(payload);
            
    //         // return [...state, payload];

    //     }},

    //     deleteContact: (state, {payload})=>{
    //         state.contacts = state.contacts.filter((el) => el.id !== payload);
    //     }
    // }
})

export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;