import { Album, Artist, ArtistInfo } from '../types';
import { get } from 'lodash';

const compareNumbersDesc = <T>(getTextProperty: (object: T) => number) => (
  objectA: T,
  objectB: T,
): number => {
  const a = getTextProperty(objectA);
  const b = getTextProperty(objectB);
  return a < b ? 1 : a > b ? -1 : 0;
};
// Still need to typo the incomming artists search response
export const transformArtistsResponse = (response: unknown): Artist[] => {
  const rawArtistList = get(response, 'results.artistmatches.artist', []);
  const unsortedArtists = rawArtistList.map((artist: Artist) => ({
    avatar: {
      lg: get(artist, 'image[2][#text]'),
      md: get(artist, 'image[1][#text]'),
      sm: get(artist, 'image[0][#text]'),
      xl: get(artist, 'image[3][#text]'),
      xxl: get(artist, 'image[4][#text]'),
    },
    listeners: Number(artist.listeners),
    mbid: artist.mbid,
    name: artist.name,
    url: artist.url,
  }));

  return unsortedArtists.sort(
    compareNumbersDesc((artist: Artist) => artist.listeners),
  );
};
// Still need to typo the incomming artist info response
export const transformArtistInfoResponse = (response: unknown): ArtistInfo => {
  const artistInfoRaw = get(response, 'artist', null);
  const artistInfo: ArtistInfo = {
    bio: {
      content: artistInfoRaw.bio.content,
      published: artistInfoRaw.bio.published,
      summary: artistInfoRaw.bio.summary,
    },
    image: {
      extra: get(artistInfoRaw, 'image[5][#text]'),
      lg: get(artistInfoRaw, 'image[2][#text]'),
      md: get(artistInfoRaw, 'image[1][#text]'),
      sm: get(artistInfoRaw, 'image[0][#text]'),
      xl: get(artistInfoRaw, 'image[3][#text]'),
      xxl: get(artistInfoRaw, 'image[4][#text]'),
    },
    isOntour: artistInfoRaw.ontour === '1',
    mbid: artistInfoRaw.mbid,
    name: artistInfoRaw.name,
    relatedArtists: artistInfoRaw.similar.artist.map(
      (artist: ArtistInfo) => artist.name,
    ),
    stats: {
      listeners: Number(artistInfoRaw.stats.listeners),
      playcount: Number(artistInfoRaw.stats.playcount),
    },
  };

  return artistInfo;
};
// Still need to typo the incomming album response
export const transformAlbumsResponse = (response: unknown): Album[] => {
  const rawTopAlbums = get(response, 'topalbums.album', []);
  const unsortedAlbums = rawTopAlbums.map((album: Album) => ({
    image: {
      lg: get(album, 'image[2][#text]'),
      md: get(album, 'image[1][#text]'),
      sm: get(album, 'image[0][#text]'),
      xl: get(album, 'image[3][#text]'),
    },
    name: album.name,
    playcount: Number(album.playcount),
    url: album.url,
  }));

  return unsortedAlbums.sort(
    compareNumbersDesc((album: Album) => album.playcount),
  );
};
