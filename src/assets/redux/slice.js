import  {createSlice}  from "@reduxjs/toolkit"

const initialState = {
    valor : "Home",
    valor2: {}
}

export const countSlice = createSlice({
    name: "page",
    initialState,
    reducers:{
        goToHome: (state) => {
            state.valor = "Home"
        },
        goToDetail: (state) => {
            state.valor = "Detail"
        },
        getMovieDetail: (state, action) => {
            state.valor2 = action.payload
        }
    },
})
export const {goToHome, goToDetail,getMovieDetail} = countSlice.actions;

export default countSlice.reducer;