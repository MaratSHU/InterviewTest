import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoadState} from '../../common/types/LoadingState';
import {HomeScreenInitialState, HomeScreenStore} from './homeScreenStore';
import {updateEventsList} from './homeScreenThunks';

const onPending = (state: HomeScreenStore) => {
  console.log('refreshing state');
  state.eventsList.loadState = LoadState.refreshing;
};

const onFullfill = (state: HomeScreenStore, action) => {
  action.payload.add
    ? (state.eventsList.content = [
        ...state.eventsList.content,
        ...action.payload.data,
      ])
    : (state.eventsList.content = action.payload.data);
  state.eventsList.loadState = LoadState.idle;
};

export const homeScreenSlice = createSlice({
  name: 'homeScreen',
  initialState: HomeScreenInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(updateEventsList.pending, onPending);
    builder.addCase(updateEventsList.fulfilled, onFullfill);
    builder.addCase(updateEventsList.rejected, onFullfill);
  },
});

export const homeScreenReducers = homeScreenSlice.reducer;
