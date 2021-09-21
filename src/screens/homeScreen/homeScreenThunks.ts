import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../common/store/store';

interface ArgProps {
  add?: boolean;
}

const options = {
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
};

export const updateEventsList = createAsyncThunk(
  'Home/UpdateEventsList',
  async (args: ArgProps, api) => {
    const add = args.add ? args.add : false;
    let uri = 'https://api.github.com/events';
    const per_page = 25;
    // const page = 0;
    //default page = 1
    uri = uri + '?' + 'per_page=' + per_page;
    const state = api.getState() as RootState;
    if (add) {
      const page =
        Math.round(state.homeScreen.eventsList.content.length / per_page) + 1;
      uri = uri + '&page=' + page;
    }
    try {
      const response = await fetch(uri, options);
      const json = await response.json();
      return {data: json, add};
    } catch (error) {
      console.error(error);
    }
  },
);
