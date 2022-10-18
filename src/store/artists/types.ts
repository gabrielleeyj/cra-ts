export interface Artist {
  name: string;
  mbid: string;
  url: string;
  avatar: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  listeners: number;
}

export interface ArtistInfo {
  bio: {
    content: string;
    published: string;
    summary: string;
  };
  image: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    extra: string;
  };
  mbid: string;
  name: string;
  isOntour: boolean;
  relatedArtists: {
    name: string;
  }[];
  stats: {
    listeners: number;
    playcount: number;
  };
}

export interface Album {
  name: string;
  image: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  playcount: number;
  url: string;
}

// export type ApiResponse = Record<string, any>

export enum ArtistsActionTypes {
  SEARCH_ARTIST = 'artist/SEARCH_ARTIST',
  SEARCH_ARTIST_AND_ALBUMS = 'artist/SEARCH_ARTIST_AND_ALBUMS',
  SEARCH_ARTIST_ERROR = 'artist/SEARCH_ARTIST_ERROR',
  SEARCH_ARTIST_INFO = 'artist/SEARCH_INFO_ARTIST',
  SEARCH_ARTIST_INFO_ERROR = 'artist/SEARCH_ARTIST_INFO_ERROR',
  SEARCH_ARTIST_INFO_SUCCESS = 'artist/SEARCH_ARTIST_INFO_SUCCESS',
  SEARCH_ARTIST_SUCCESS = 'artist/SEARCH_ARTIST_SUCCESS',
  SEARCH_ARTIST_TOP_ALBUMS = 'artist/SEARCH_ARTIST_TOP_ALBUMS',
  SEARCH_ARTIST_TOP_ALBUMS_ERROR = 'artist/SEARCH_ARTIST_TOP_ALBUMS_ERROR',
  SEARCH_ARTIST_TOP_ALBUMS_SUCCESS = 'artist/SEARCH_ARTIST_TOP_ALBUMS_SUCCESS',
  SET_ARTIST_AS_FAVORITE = 'artist/SEARCH_ARTIST_AS_FAVORITE',
}

export interface ArtistsState {
  readonly searchLoading: boolean;
  readonly topAlbumsSearchLoading: boolean;
  readonly infoSearchLoading: boolean;
  readonly searchCache: Artist[];
  readonly infoCache: ArtistInfo | null;
  readonly topAlbumsCache: Album[];
  readonly errors?: string;
}
