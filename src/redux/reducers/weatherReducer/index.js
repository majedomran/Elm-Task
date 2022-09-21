import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../network';
import {API_ID} from '../../../config/apiConfig';

const initialState = {
  weather: null,
  temp: null,
  lon: null,
  lat: null,
  city: 'San Francisco, CA',
  weatherLoading: null,
  error: null,
};
export const getWeatherAction = createAsyncThunk(
  'weather/getWeahter',
  async ({}, {rejectWithValue}) => {
    try {
      const response = await api
        .get(
          `/weather?q=san francisco&units=metric&appid=${API_ID}`,
          {},
        )
        .catch(err => {
          console.log('Error: ', err);
        });
      if (response?.status === 200) {
        return response.data;
      } else {
        return rejectWithValue(response);
      }
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response);
      } else if (error.request) {
        return rejectWithValue(error.request);
      } else if (error.message) {
        return rejectWithValue(error.message);
      }
    }
  },
);

const weatherReducer = createSlice({
  name: 'weeather',
  initialState,
  reducers: {},
  extraReducers: {
    [getWeatherAction.fulfilled]: (state, action) => {
      state.weather = action.payload?.weather[0].main;
      state.temp = action.payload?.main.temp;
      state.timeZone = action.payload?.timezone;
      state.lon = action.payload?.coord.lon;
      state.lat = action.payload?.coord.lat;
      state.weatherLoading = false;
    },
    [getWeatherAction.pending]: (state, action) => {
      state.weatherLoading = true;
    },
    [getWeatherAction.rejected]: (state, action) => {
      state.error = action.payload;
      state.weatherLoading = false;
    },
  },
});

export default weatherReducer.reducer;
