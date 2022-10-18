/* eslint-disable @typescript-eslint/naming-convention */
import { Album, Artist, ArtistInfo } from '../types';
import {
  transformAlbumsResponse,
  transformArtistInfoResponse,
  transformArtistsResponse,
} from './transformers';
import axios from 'axios';
import { config } from '@Config/config';

interface Params {
  api_key: string;
  artist?: string;
  format: string;
  limit?: number;
  mbid?: string;
  method: string;
}

export async function searchArtists(artist: string): Promise<Artist[]> {
  const rawData = await getAPI(
    'artist.search',
    'artist',
    artist,
    12,
  );
  return transformArtistsResponse(rawData);
}

export async function searchArtistsInfo(
  mbid: string,
  artist: string,
): Promise<ArtistInfo> {
  let param;
  let value;
  if (mbid) {
    param = 'mbid';
    value = mbid;
  } else {
    param = 'artist';
    value = artist;
  }
  const rawData = await getAPI(
    'artist.getInfo',
    param,
    value,
    20,
  );
  return transformArtistInfoResponse(rawData);
}

export async function searchArtistsTopAlbums(
  mbid: string,
  artist: string,
): Promise<Album[]> {
  let param;
  let value;
  if (mbid) {
    param = 'mbid';
    value = mbid;
  } else {
    param = 'artist';
    value = artist;
  }
  const rawData = await getAPI(
    'artist.getTopAlbums',
    param,
    value,
    20,
  );
  return transformAlbumsResponse(rawData);
}

async function getAPI(
  method: string,
  param: string,
  value: string,
  limit: number,
) {
  const APIKEY = config.API_KEY;
  const params: Params = {
    method,
    [param]: value,
    // eslint-disable-next-line sort-keys
    api_key: APIKEY,
    format: 'json',
  };
  if (limit) {
    params.limit = limit;
  }
  const rawData = await axios.get(config.API_URL, {
    headers: {
      'content-type': 'application/json',
    },
    params,
  });
  const { data } = rawData;
  return data;
}
