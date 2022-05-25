import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartStore from './cartStore'


const rootReducer = combineReducers({
    cartStore

});

const store = configureStore({
    reducer: rootReducer
});


export default store;