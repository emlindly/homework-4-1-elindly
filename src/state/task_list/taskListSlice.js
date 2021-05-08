import { createSlice } from '@reduxjs/toolkit';

export const taskListSlice = createSlice({
    name: 'whatever',
    initialState: {
        task: '',
    },
    reducers: {
        addTask: (state, action) => {
            state.task = action.payload;
            console.log('test')
        },
    }
});

export const { addTask } = taskListSlice.actions;
export const selectTask = (state) => state.input.task;
export default taskListSlice.reducer;