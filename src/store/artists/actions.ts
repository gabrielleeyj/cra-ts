import { Album, Artist, ArtistInfo, ArtistsActionTypes } from './types';
import { action } from 'typesafe-actions';

export const searchArtistAction = (
  artist: string,
): { type: ArtistsActionTypes.SEARCH_ARTIST; payload: string } =>
  action(ArtistsActionTypes.SEARCH_ARTIST, artist);

export const searchArtistSuccessAction = (
  artist: string,
  data: Artist[],
): {
  type: ArtistsActionTypes.SEARCH_ARTIST_SUCCESS;
  payload: { artist: string; data: Artist[] };
} => action(ArtistsActionTypes.SEARCH_ARTIST_SUCCESS, { artist, data });

export const searchArtistErrorAction = (
  message: string,
): {
  type: ArtistsActionTypes.SEARCH_ARTIST_ERROR;
  payload: string;
} => action(ArtistsActionTypes.SEARCH_ARTIST_ERROR, message);

// -----------------------------------------------------------------------------
export const searchArtistTopAlbumsAction = (
  mbid: string,
  artist: string,
): {
  type: ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS;
  payload: { artist: string; mbid: string };
} => action(ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS, { artist, mbid });

export const searchArtistTopAlbumsSuccessAction = (
  artist: string,
  data: Album[],
): {
  type: ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS_SUCCESS;
  payload: { artist: string; data: Album[] };
} =>
  action(ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS_SUCCESS, {
    artist,
    data,
  });

export const searchArtistTopAlbumsErrorAction = (
  message: string,
): {
  type: ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS_ERROR;
  payload: string;
} => action(ArtistsActionTypes.SEARCH_ARTIST_TOP_ALBUMS_ERROR, message);

// -----------------------------------------------------------------------------

export const searchArtistInfoAction = (
  mbid: string,
  artist: string,
): {
  type: ArtistsActionTypes.SEARCH_ARTIST_INFO;
  payload: { artist: string; mbid: string };
} => action(ArtistsActionTypes.SEARCH_ARTIST_INFO, { artist, mbid });

export const searchArtistInfoSuccessAction = (
  artist: string,
  data: ArtistInfo,
): {
  type: ArtistsActionTypes.SEARCH_ARTIST_INFO_SUCCESS;
  payload: { artist: string; data: ArtistInfo };
} => action(ArtistsActionTypes.SEARCH_ARTIST_INFO_SUCCESS, { artist, data });

export const searchArtistInfoErrorAction = (
  message: string,
): {
  type: ArtistsActionTypes.SEARCH_ARTIST_INFO_ERROR;
  payload: string;
} => action(ArtistsActionTypes.SEARCH_ARTIST_INFO_ERROR, message);

// -----------------------------------------------------------------------------

export const setArtistAsFavoriteAction = (
  artist: Artist,
): {
  type: ArtistsActionTypes.SET_ARTIST_AS_FAVORITE;
  payload: Artist;
} => action(ArtistsActionTypes.SET_ARTIST_AS_FAVORITE, artist);
