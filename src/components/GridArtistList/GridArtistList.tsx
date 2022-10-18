import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import React, { MouseEvent } from 'react';
import {
  searchArtistInfoAction,
  searchArtistTopAlbumsAction,
} from '@Store/artists/actions';
import { Artist } from '@Store/artists/types';
import defaultArtistCover from '@Assets/images/defaultArtistCover.png';
import { IBrowser } from 'redux-responsive/types';
import styled from 'styled-components';
import { withRouter, PropsFromRouter } from '@Utils/withRouter';

interface PropsFromState {
  artists: Artist[];
  browser: IBrowser;
}

interface PropsFromDispatch {
  searchArtistTopAlbums: typeof searchArtistTopAlbumsAction;
  searchArtistInfo: typeof searchArtistInfoAction;
}

export type IProps = PropsFromState & PropsFromDispatch & PropsFromRouter;

const gridWidthColumns: Record<string, number> = {
  extraSmall: 2,
  small: 3,
  // eslint-disable-next-line sort-keys
  medium: 4,
  // eslint-disable-next-line sort-keys
  large: 5,
  // eslint-disable-next-line sort-keys
  infinity: 6,
};

const GridArtistList: React.FunctionComponent<IProps> = (props: IProps): React.ReactElement => {
  const clickArtist = (event: MouseEvent, artist: Artist): void => {
    event.preventDefault();
    props.searchArtistInfo(artist.mbid, artist.name);
    props.searchArtistTopAlbums(artist.mbid, artist.name);
    props.navigate('/artist');
  };

  const getImage = (image: string): string => image !== '' ? image : defaultArtistCover;

  const gridItem = (artist: Artist, index: number): React.ReactElement => (
    <GridListTile
      key={index}
      cols={1}
      onClick={(e: MouseEvent): void => clickArtist(e, artist)}
    >
      <ImageContainer
        src={getImage(artist.avatar.xl)}
        alt={artist.name}
      />
      <StyledGridListTileBar
        title={artist.name}
        subtitle={
          <span>
            Listeners:{' '}
            {artist.listeners.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </span>
        }
        actionPosition="left"
      />
    </GridListTile>
  );

  const gridItems = (): React.ReactNode => props.artists.map(
      (artist: Artist, index: number): React.ReactElement =>
        gridItem(artist, index),
  );

  const getGridColumns = (type: string): number => gridWidthColumns[type];

  return (
    <Wrapper>
      <StyledGridList
        spacing={1}
        cols={getGridColumns(props.browser.mediaType)}
      >
        {gridItems()}
      </StyledGridList>
    </Wrapper>
  );
}

export default withRouter(GridArtistList);

// Styled components

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;
`;

const StyledGridList = styled(GridList)``;

const StyledGridListTileBar = styled(GridListTileBar)`
  height: 80px;
`;

const ImageContainer = styled('img')`
  border: 1px rgba(255, 255, 255, 0.5) solid;
  max-height: 100%;
  max-width: 100%;
`;
