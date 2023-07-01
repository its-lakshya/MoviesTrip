import { configureStore } from '@reduxjs/toolkit';
import tagSearchSlice from './tagSearchSlice';
import detailsSlice from './detailsSlice';
import searchSlice from './searchSlice';

const store = configureStore({
    reducer:{
        tagSearch:tagSearchSlice,
        details:detailsSlice,
        search:searchSlice,

    }
})

export default store;