import {Loadable, LoadState} from '../../common/types/LoadingState';
import {EventDataType} from './types';

export interface HomeScreenStore {
  eventsList: Loadable<EventDataType[]>;
}

export const HomeScreenInitialState: HomeScreenStore = {
  eventsList: {
    loadState: LoadState.needLoad,
    content: [],
  },
};
