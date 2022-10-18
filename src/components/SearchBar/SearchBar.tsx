import { connect } from 'react-redux';
import React from 'react';
import { searchArtistAction } from '@Store/artists/actions';
import SearchInput from '@Components/SearchInput/SearchInput';
import styled from 'styled-components';
import { withRouter, PropsFromRouter } from '@Utils/withRouter';

interface PropsFromDispatch {
  searchArtistAction: typeof searchArtistAction;
}

export type IProps = PropsFromDispatch & PropsFromRouter;

const SearchBar: React.FunctionComponent<IProps> = (props: IProps): React.ReactElement => {
  const search = (value: string): void => {
    props.navigate('/searchResults');
    props.searchArtistAction(value);
  };

  return (
    <SearchBarContainer>
      <SearchInput search={search} />
    </SearchBarContainer>
  );
}

const mapDispatchToProps = {
  searchArtistAction,
};

export const TestComponent = SearchBar;

export default withRouter(connect(null, mapDispatchToProps)(SearchBar));

// Styled components

const SearchBarContainer = styled('div')`
  display: flex;
  height: 30px;
`;
