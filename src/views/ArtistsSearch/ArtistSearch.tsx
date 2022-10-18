import {
  searchArtistInfoAction,
  searchArtistTopAlbumsAction,
} from '@Store/artists/actions';
import { ApplicationState } from '@Store/index';
import { Artist } from '@Store/artists/types';
import { connect } from 'react-redux';
import GridArtistList from '@Components/GridArtistList/GridArtistList';
import { IBrowser } from 'redux-responsive/types';
import LoadingLinear from '@Components/Loading/LoadingLinear';
import React from 'react';
import SimpleMessage from '@Components/SimpleMessage/SimpleMessage';
import styled from 'styled-components';

export interface TypedAction<TAction, TPayload> {
  type: TAction;
  payload: TPayload;
}

interface PropsFromState {
  artists: Artist[];
  browser: IBrowser;
  isLoadingArtists: boolean;
}

interface PropsFromDispatch {
  searchArtistInfo: typeof searchArtistInfoAction;
  searchArtistTopAlbums: typeof searchArtistTopAlbumsAction;
}

type IProps = PropsFromState & PropsFromDispatch;

const ArtistSearch: React.FunctionComponent<IProps> = (props: IProps): React.ReactElement => (
        <Wrapper>
          {props.isLoadingArtists && <LoadingLinear text={'Searching artist...'} />}
          {!props.isLoadingArtists &&
            (!(props.artists.length === 0) ? (
              <React.Fragment>
                <Title>Search results</Title>
                <GridArtistList
                  searchArtistInfo={props.searchArtistInfo}
                  searchArtistTopAlbums={props.searchArtistTopAlbums}
                  artists={props.artists}
                  browser={props.browser}
                />
              </React.Fragment>
            ) : (
              <SimpleMessageStyled text={'No results for the search'} />
            ))}
        </Wrapper>
  );

const mapStateToProps = ({
  artists,
  browser,
}: ApplicationState): PropsFromState => ({
  artists: artists.searchCache,
  browser,
  isLoadingArtists: artists.searchLoading,
});

const mapDispatchToProps = {
  searchArtistInfo: searchArtistInfoAction,
  searchArtistTopAlbums: searchArtistTopAlbumsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistSearch);

// Styled components

const SimpleMessageStyled = styled(SimpleMessage)`
  margin-top: 10px;
`;
const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const Title = styled('p')`
  font-size: 18px;
  margin: 20px 0;
  text-align: center;
`;
