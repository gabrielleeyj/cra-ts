import * as React from 'react';
import styled from 'styled-components';

export interface ArtistHeaderProps {
  image: string;
  isOntour: boolean;
  listenersCount: number;
  name: string;
  playCount: number;
}

const ArtistHeader: React.FunctionComponent<ArtistHeaderProps> = ({
  name,
  image,
  isOntour,
  listenersCount,
  playCount,
}: ArtistHeaderProps): React.ReactElement => (
  <React.Fragment>
    <BackgroundContainer>
      <ImageWrapper>
        <ArtistImage
          style={{
            backgroundImage: 'url(' + image + ')',
          }}
        />
      </ImageWrapper>
      <ImageOverlay />
    </BackgroundContainer>
    <DataContainer>
      <ArtistName>{name}</ArtistName>
      {isOntour && <ArtistOnTour>On tour</ArtistOnTour>}
      <ArtistData>
        <ArtistListenersContainer>
          <ArtistListenersTitle>Listeners</ArtistListenersTitle>
          <ArtistListenersValue>
            {listenersCount.toLocaleString()}
          </ArtistListenersValue>
        </ArtistListenersContainer>
        <ArtistPlayCountContainer>
          <ArtistPlayCountTitle>Times played</ArtistPlayCountTitle>
          <ArtistPlayCountValue>
            {playCount.toLocaleString()}
          </ArtistPlayCountValue>
        </ArtistPlayCountContainer>
      </ArtistData>
    </DataContainer>
  </React.Fragment>
);

export default ArtistHeader;

// Styled components

const BackgroundContainer = styled('div')`
  background-color: #161b1e;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const ImageWrapper = styled('div')`
  height: 100%;
  position: absolute;
  right: 0%;
  width: 50%;
`;

const ArtistImage = styled('img')`
  background-position: 50% 25%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const ImageOverlay = styled('div')`
  background: linear-gradient(0.25turn, rgb(22, 27, 30, 1), rgb(22, 27, 30, 0));
  height: 100%;
  position: absolute;
  right: 0;
  width: 50%;
`;

const DataContainer = styled('div')`
  padding: 30px 20px 20px 30px;
  position: relative;
  z-index: 1;
`;

const ArtistName = styled('p')`
  font-size: 40px;
`;
const ArtistOnTour = styled('p')`
  color: yellow;
  font-size: 10px;
`;

const ArtistData = styled('div')``;

const ArtistListenersContainer = styled('div')`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  width: 80px;
`;
const ArtistListenersTitle = styled('p')`
  font-size: 10px;
`;
const ArtistListenersValue = styled('p')`
  color: white;
  font-size: 20px;
`;

const ArtistPlayCountContainer = styled('div')`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  width: 80px;
`;
const ArtistPlayCountTitle = styled('p')`
  font-size: 10px;
`;
const ArtistPlayCountValue = styled('p')`
  color: white;
  font-size: 20px;
`;
