import { createSlice } from "@reduxjs/toolkit";


const initialStateFilter = '';
  
  const filtersSlice = createSlice({
    name: "filter",
    initialState: initialStateFilter,
    reducers: {
      changeFilter(state, action) {
        // console.log('action.payload', action.payload)
        return (state = action.payload);
      },
    },
  });
  
  export const filterReducer = filtersSlice.reducer
//   console.log(filtersSlice)
  export const {changeFilter} = filtersSlice.actions