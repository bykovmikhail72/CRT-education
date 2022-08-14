import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    active: false
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        toggleActive: state => {state.active = !state.active}
    }
})

const {reducer, actions} = appSlice;

export default reducer;

export const {
    toggleActive,
} = actions;
