import {
  all,
  AllEffect,
  call,
  fork,
  ForkEffect,
  put,
  takeLatest,
} from 'redux-saga/effects';
import {
  searchArtistAction,
  searchArtistErrorAction,
  searchArtistInfoAction,
  searchArtistInfoErrorAction,
  searchArtistInfoSuccessAction,
  searchArtistSuccessAction,
  searchArtistTopAlbumsAction,
  searchArtistTopAlbumsErrorAction,
  searchArtistTopAlbumsSuccessAction,
} from './actions';
import {
  searchArtists,
  searchArtistsInfo,
  searchArtistsTopAlbums,
} from './utils/api';
import { ArtistsActionTypes } from './types';
import { toastr } from 'react-redux-toastr';

function* apiSearchArtists(action: ReturnType<typeof searchArtistAction>) {
  try {
    const res = yield call(searchArtists, action.payload);
    yield put(searchArtistSuccessAction(action.payload, res));
  } catch (err) {
    yield put(searchArtistErrorAction(err));
    toastr.error(
      'We couldnt get the required search',
      `Error trying to get: ${action.payload}`,
    );
  }
}

function* apiSearchArtistInfo(
  action: ReturnType<typeof searchArtistInfoAction>,
) {
  try {
    const res = yield call(
      searchArtistsInfo,
      action.payload.mbid,
      action.payload.artist,
    );
    yield put(searchArtistInfoSuccessAction(action.payload.artist, res));
  } catch (err) {
    yield put(searchArtistInfoErrorAction(err));
    toastr.error(
      'We couldnt get the required artist',
      `Error trying to get: ${action.payload.artist}`,
    );
  }
}

function* apiSearchArtistTopAlbums(
  action: ReturnType<typeof searchArtistTopAlbumsAction>,
) {
  try {
    const res = yield call(
      searchArtistsTopAlbums,
      action.payload.mbid,
      action.payload.artist,
    );
    yield put(searchArtistTopAlbumsSuccessAction(action.payload.artist, res));
  } catch (err) {
    yield put(searchArtistTopAlbumsErrorAction(err));
    toastr.error(
      'We couldnt get the required albums',
      `Error trying to get: ${action.payload.artist}`,
    );
  }
}

function* watchSelectArtist() {
  yield takeLatest(ArtistsActionTypes.SEARCH_ARTIST, apiSearchArtists);
}

function* watchSelectArtistInfo() {
  yield takeLatest(ArtistsActionTypes.SEARCH_ARTIST_INFO, apiSearchArtistInfo);
}

function* watchSelectArtistAlbums() {
  yield takeLatest(
    ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS,
    apiSearchArtistTopAlbums,
  );
}

function* artistsSaga(): Generator<AllEffect<ForkEffect<void>>> {
  yield all([
    fork(watchSelectArtist),
    fork(watchSelectArtistInfo),
    fork(watchSelectArtistAlbums),
  ]);
}

export default artistsSaga;
