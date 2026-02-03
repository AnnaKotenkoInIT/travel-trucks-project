import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/campers');
    console.log('fetchCampers response:', response.data);
    return response.data;
  } catch (err) {
    console.error('fetchCampers error:', err);
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const fetchCamper = createAsyncThunk('campers/fetchCamper', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/campers/${id}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
