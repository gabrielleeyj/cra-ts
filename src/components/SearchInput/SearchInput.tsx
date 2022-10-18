import { IconButton } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

interface PropsFromDispatch {
  search: (value: string) => void;
}

export type IProps = PropsFromDispatch;

interface IState {
  value: string;
}

const SearchInput: React.FunctionComponent<IProps> = (props: IProps): React.ReactElement => {
  const [value, setValue] = React.useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      const cleanValue = event.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
      setValue(cleanValue);
  }

  const keyPressed = (
    event: React.KeyboardEvent
    ): void => {
    if (event.key === 'Enter') {
      search();
    }
  };

  const search = (): void => {
    props.search(value);
    setValue('');
  };

  return (
    <SearchBar>
      <StyledInput
        className="input"
        id="searchInput"
        inputProps={{ 'aria-label': 'description' }}
        onChange={handleChange}
        onKeyPress={keyPressed}
        placeholder="Search for your artist..."
        type="text"
        value={value}
      />
      <IconButtonContainer>
        <IconButton aria-label="search" size="small" onClick={search}>
          <SearchIcon />
        </IconButton>
      </IconButtonContainer>
    </SearchBar>
  );
}

export default SearchInput;

// Styled components

const SearchBar = styled('div')`
  background-color: white;
  display: flex;
`;

const IconButtonContainer = styled('div')`
  height: 30px;
  right: 0;
  top: 0;
`;

const StyledInput = styled(Input)`
  font-size: 14px;
  margin-left: 5px;
  padding: 0;
`;
