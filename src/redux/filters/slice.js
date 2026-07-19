import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    chooseLocation(state, action) {
      state.location = action.payload;
    },

    chooseForm(state, action) {
      state.form = action.payload;
    },

    chooseEngine(state, action) {
      state.engine = action.payload;
    },

    chooseTransmission(state, action) {
      state.transmission = action.payload;
    },

    clearFilters() {
      return initialState;
    },
  },
});

export const { chooseLocation, chooseForm, chooseEngine, chooseTransmission, clearFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
