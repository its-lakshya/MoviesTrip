import { configureStore } from '@reduxjs/toolkit';
import tagSearchSlice from './tagSearchSlice';
import detailsSlice from './detailsSlice';

const store = configureStore({
    reducer:{
        tagSearch:tagSearchSlice,
        details:detailsSlice,

    }
})

export default store;