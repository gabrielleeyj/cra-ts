import * as React from 'react';
import { Album } from '@Store/artists/types';
import CarouselAlbumList from '@Components/CarouselAlbumList/CarouselAlbumList';
import LoadingLinear from '@Components/Loading/LoadingLinear';
import SimpleMessage from '@Components/SimpleMessage/SimpleMessage';
import styled from 'styled-components';

type Typeofkeys = 'true-true' | 'true-false' | 'false-true' | 'false-false';

export interface DiscographyProps {
  loading: boolean;
  albums: Album[];
  title: string;
}

const Discography: React.FunctionComponent<DiscographyProps> = ({
  loading,
  albums,
  title,
}: DiscographyProps): React.ReactElement => {
  const key = `${loading}-${albums.length > 0}`;
  return (
    <React.Fragment>
      <DiscographyBar>
        <DiscographyTitle>{title}</DiscographyTitle>
      </DiscographyBar>
      {
        {
          'false-false': (
            <SimpleMessage text={'Sorry! We couldnt find albums'} />
          ),
          'false-true': <CarouselAlbumList albums={albums} />,
          'true-false': <LoadingLinear text={'Loading albums...'} />,
          'true-true': <LoadingLinear text={'Loading albums...'} />,
        }[key as Typeofkeys]
      }
    </React.Fragment>
  );
};

export default Discography;

// Styled components

const DiscographyBar = styled('div')`
  align-items: center;
  display: flex;
  font-size: 24px;
  height: 60px;
  justify-content: flex-end;
  width: 100%;
`;
const DiscographyTitle = styled('p')`
  font-size: 24px;
  padding: 4px;
`;
