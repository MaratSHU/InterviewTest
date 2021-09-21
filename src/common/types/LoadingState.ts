export enum LoadState {
  needLoad = 'needLoad',
  idle = 'idle',
  error = 'error',
  allIsLoaded = 'allIsLoaded',

  firstLoad = 'firstLoad',
  pullToRefresh = 'pullToRefresh',
  refreshing = 'refreshing',
  loadingMore = 'loadingMore',
}

export interface Loadable<T> {
  loadState: LoadState;
  content: T;
}
