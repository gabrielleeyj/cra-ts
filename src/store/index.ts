import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import { connectRouter, RouterState } from 'connected-react-router';
import { IBrowser, responsiveStateReducer } from 'redux-responsive';
import { reducer as toastrReducer, ToastrState } from 'react-redux-toastr';
import { initialState as artistInitialState } from '@Store/artists/reducer';
import { artistsReducer } from './artists/reducer';
import artistsSaga from './artists/sagas';
import { ArtistsState } from './artists/types';
import { combineReducers } from 'redux';
import { History } from 'history';

export interface ApplicationState {
  artists: ArtistsState;
  router: RouterState;
  browser: IBrowser;
  toastr: ToastrState;
}

export const initialState = {
  artists: artistInitialState,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createRootReducer = (history: History) =>
  combineReducers({
    artists: artistsReducer,
    browser: responsiveStateReducer,
    router: connectRouter(history),
    toastr: toastrReducer,
  });

export function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(artistsSaga)]);
}
