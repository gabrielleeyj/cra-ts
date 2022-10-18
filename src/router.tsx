import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import ArtistInfo from '@Views/ArtistInfo/ArtistInfo';
import ArtistSearch from '@Views/ArtistsSearch/ArtistSearch';
import Body from '@Components//Body';
import Header from '@Components//Header';
import Home from '@Views/home';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

const Router: React.FunctionComponent = () => (
  <Root>
    <Header title="CRA" />
    <Body>
      <Scrollbars
        autoHide={true}
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: 'grey',
              marginLeft: '0',
              marginRight: '0',
            }}
          />
        )}
      >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route
            path="/searchResults/:value"
            element={<ArtistSearch/>}
          />
          <Route path="/searchResults" element={<ArtistSearch/>} />
          <Route path="/artist" element={<ArtistInfo/>} />
        </Routes>
      </Scrollbars>
    </Body>
  </Root>
);

export default Router;

const Root = styled('div')`
  align-items: center;
  background-color: #090e11;
  color: #e5e5e5;
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;
