import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamper } from './operations';

const initialState = {
  items: [],
  favourites: [],
  currentCamper: null,
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    toggleFavourite: (state, action) => {
      const camperId = action.payload;
      const camper = state.items.find(c => c.id === camperId);
      if (camper) {
        camper.isFavourite = !camper.isFavourite;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload.items.map(c => ({ ...c, isFavourite: false }));
      })
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(fetchCamper.pending, handlePending)
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamper.rejected, handleRejected);
  },
});

export const { toggleFavourite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
