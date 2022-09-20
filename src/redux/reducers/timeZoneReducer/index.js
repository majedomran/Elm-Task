import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../network';
const initialState = {
  timeZoneId: null,
  error: null,
  localDate: null,
};
// https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=AIzaSyCsg9VshD-dBit9hA_BR2joUY91l4BtbaU
export const getTimeZoneAction = createAsyncThunk(
  'timeZone/getTimeZone',
  async ({lon, lat}, {rejectWithValue}) => {
    try {
      console.log('------lon: ', lon);
      console.log('------lat: ', lat);
      const response = await api.get(
        `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lon}&timestamp=000000000&key=AIzaSyCsg9VshD-dBit9hA_BR2joUY91l4BtbaU`,
        {},
      );
      console.log('------response: ', response);
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

const timeZoneReducer = createSlice({
  name: 'timeZone',
  initialState,
  reducers: {},
  extraReducers: {
    [getTimeZoneAction.fulfilled]: (state, action) => {
      console.log('------getTimeZoneAction.fulfilled action: ', action);
      state.timeZoneId = action.payload?.timeZoneId;
      // state.localDate = new Date(
      //   new Date().toLocaleString('en-US', {
      //     timeZone: action.payload?.timeZoneId,
      //   }),
      // );
    },
    [getTimeZoneAction.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Actions
// export const {

// } = weatherReducer.actions;

export default timeZoneReducer.reducer;
