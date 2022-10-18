import * as React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  title,
}: HeaderProps): React.ReactElement => (
  <Wrapper>
    <HeaderInner>
      <HeaderCenter>
        <HeaderNavLink to="/" className="is-active">
        <Title>{title}</Title>
        </HeaderNavLink>
      </HeaderCenter>
    </HeaderInner>
    <ToolsContainer>
      <SearchBar />
    </ToolsContainer>
  </Wrapper>
);

export default Header;

// Styled components

const Wrapper = styled('header')`
  color: white;
  display: flex;
  height: 60px;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
`;

const HeaderInner = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: flex-start;
  padding: 0 10px;
`;

const HeaderCenter = styled('div')`
  padding-right: 40px;
`;


const HeaderNavLink = styled(NavLink)`
  align-items: center;
  display: flex;

  :link {
    text-decoration: none;
    color: darkorange;
  }

  :visited {
    text-decoration: none;
    color: darkorange;
  }

  :hover {
    text-decoration: none;
    color: white;
  }

  :active {
    color: darkorange;
    text-decoration: none;
  }
`;

const ToolsContainer = styled('div')`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  width: 100%;
`;

const Title = styled('h2')`
  font-weight: 500;
`;
