import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterValue = {
    value: string
};

const initialState: FilterValue = {
    value: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
updateFilter(state,  action:PayloadAction<string>) {
    state.value = action.payload;
}
    }
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
