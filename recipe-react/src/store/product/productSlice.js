import { createSlice } from '@reduxjs/toolkit';


export const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
    },
    reducers:{
        saveProduct: (state, action) =>{
            const getItem = state.data.find( item => item.id === action.payload.id);
            if(getItem){
                alert("Already exists")
            }else{
                state.data.push(action.payload)
            }
        },
        deleteProduct: (state, action) => {
            const {id} = action.payload
            console.log(id)
            state.data = state.data.filter((item)=> item.id !== id)
        },

    }
})

export const {saveProduct, deleteProduct} =  productSlice.actions;

export default productSlice.reducer;
