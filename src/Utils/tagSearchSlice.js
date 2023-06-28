import { createSlice } from "@reduxjs/toolkit"

const tagSearchSlice =createSlice({
    name:'tagSearch',
    initialState:{
        data:null,
    },
    reducers:{
        search:(state,action) =>{
            state.data=action.payload;
            // state.date2=action.payload
        }
    }

})

export const {search} = tagSearchSlice.actions
export default tagSearchSlice.reducer