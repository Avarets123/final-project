import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({
    name: 'cartStore',
    initialState: [],
    reducers: {
        addData(state, action) {
            const { id, size, count } = action.payload

            if (!action.payload || !size) return;

            const find = state.find(el => el.id === id && el.size === size)

            if (find) {
                const indexItem = state.findIndex(el => el.id === id && el.size === size);
                state[indexItem].count += count;
                return;
            }
            state.push(action.payload);
        },
        delData(state, action) {

            if (!action.payload) {
                for (let i = 0; i <= state.length - 1; i++) {
                    state.pop()
                }
                return
            }

            const { id, size } = action.payload;
            const find = state.findIndex(el => el.id === id && el.size === size);
            state.splice(find, 1);
        },

    }
})


export const { addData, delData, clearStore } = cartStore.actions


export default cartStore.reducer;