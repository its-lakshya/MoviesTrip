import { configureStore } from '@reduxjs/toolkit';
import tagSlice from './tagSearchSlice';

const store = configureStore({
    reducer:{
        tagSearch:tagSlice

    }
})

export default store;