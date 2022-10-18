import { ArtistsActionTypes, ArtistsState } from './types';
import { Reducer } from 'redux';

export const initialState: ArtistsState = {
  errors: '',
  infoCache: null,
  infoSearchLoading: false,
  searchCache: [],
  searchLoading: false,
  topAlbumsCache: [],
  topAlbumsSearchLoading: false,
};

const reducer: Reducer<ArtistsState> = (
  state: ArtistsState = initialState,
  action,
): ArtistsState => {
  switch (action.type) {
    case ArtistsActionTypes.SEARCH_ARTIST: {
      return {
        ...state,
        searchCache: [],
        searchLoading: true,
      };
    }
    case ArtistsActionTypes.SEARCH_ARTIST_SUCCESS: {
      const searchCache = action.payload.data;
      return {
        ...state,
        searchCache,
        searchLoading: false,
      };
    }
    case ArtistsActionTypes.SEARCH_ARTIST_ERROR: {
      return {
        ...state,
        errors: action.payload,
        searchCache: [],
        searchLoading: false,
      };
    }
    case ArtistsActionTypes.SEARCH_ARTIST_INFO: {
      return {
        ...state,
        infoCache: null,
        infoSearchLoading: true,
      };
    }
    case ArtistsActionTypes.SEARCH_ARTIST_INFO_SUCCESS: {
      const infoCache = action.payload.data;
      return {
        ...state,
        infoCache,
        infoSearchLoading: false,
      };
    }
    case ArtistsActionTypes.SEARCH_ARTIST_INFO_ERROR: {
      return {
        ...state,
        errors: action.payload,
        infoCache: null,
        infoSearchLoading: false,
      };
    }
    case ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS: {
      return {
        ...state,
        topAlbumsCache: [],
        topAlbumsSearchLoading: true,
      };
    }
    case ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS_SUCCESS: {
      const topAlbumsCache = action.payload.data;
      return {
        ...state,
        topAlbumsCache,
        topAlbumsSearchLoading: false,
      };
    }
    case ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS_ERROR: {
      return {
        ...state,
        errors: action.payload,
        topAlbumsCache: [],
        topAlbumsSearchLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer as artistsReducer };
