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
        <Title>{title}</Title>
      </HeaderCenter>
      <HeaderNav>
        <HeaderNavLink to="/" className="is-active">
          Home
        </HeaderNavLink>
      </HeaderNav>
    </HeaderInner>
    <ToolsContainer>
      <SearchBar />
    </ToolsContainer>
  </Wrapper>
);

export default Header;

// Styled components

const Wrapper = styled('header')`
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzI4MjgyOCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzIiBjeT0iNC4zIiByPSIxLjgiIGZpbGw9IiMzOTM5MzkiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMS44IiBmaWxsPSJibGFjayI+PC9jaXJjbGU+CjxjaXJjbGUgY3g9IjEwLjUiIGN5PSIxMi41IiByPSIxLjgiIGZpbGw9IiMzOTM5MzkiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIxMC41IiBjeT0iMTEuMyIgcj0iMS44IiBmaWxsPSJibGFjayI+PC9jaXJjbGU+Cjwvc3ZnPg==');
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

const HeaderNav = styled('nav')`
  @media (min-width: 992px) {
    margin: 0;
  }
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
