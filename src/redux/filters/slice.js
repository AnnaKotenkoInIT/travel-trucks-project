import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  draft: {
    location: '',
    form: '',
    engine: '',
    transmission: '',
  },

  applied: {
    location: '',
    form: '',
    engine: '',
    transmission: '',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    chooseLocation(state, action) {
      state.draft.location = action.payload;
    },

    chooseForm(state, action) {
      state.draft.form = action.payload;
    },

    chooseEngine(state, action) {
      state.draft.engine = action.payload;
    },

    chooseTransmission(state, action) {
      state.draft.transmission = action.payload;
    },

    applyFilters(state) {
      state.applied = { ...state.draft };
    },

    clearFilters(state) {
      state.draft = {
        location: '',
        form: '',
        engine: '',
        transmission: '',
      };

      state.applied = {
        location: '',
        form: '',
        engine: '',
        transmission: '',
      };
    },
  },
});

export const { chooseLocation, chooseForm, chooseEngine, chooseTransmission, applyFilters, clearFilters } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
