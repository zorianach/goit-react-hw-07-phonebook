import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice/contactsSlice";
import { filterReducer } from "./filterSlice";
// import storage from 'redux-persist/lib/storage'
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
})
// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['contacts'],
//   }
// const rootReducer = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
//   });

//   const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//     reducer: persistedReducer,
// })


// export const persistor = persistStore(store);
// console.log('store', store)