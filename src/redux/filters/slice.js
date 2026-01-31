import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  equipment: [],
  type: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    chooseLocation(state, action) {
      state.location = action.payload;
    },
    chooseEquipment: (state, action) => {
      if (state.equipment.includes(action.payload)) {
        state.equipment = state.equipment.filter(i => i !== action.payload);
      } else {
        state.equipment.push(action.payload);
      }
    },
    chooseType(state, action) {
      if (state.type !== action.payload) {
        state.type = action.payload;
      } else state.type = null;
    },
  },
});

export const { chooseLocation, chooseEquipment, chooseType } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
