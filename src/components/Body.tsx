import Container from './Container';
import { defaultWindowBreakpoints as sizes } from '@Constants/breakpoints';
import styled from 'styled-components';

const Body = styled(Container)`
  background-color: #262d31;
  display: flex;
  height: 100%;
  justify-content: center;
  max-width: ${sizes.small - 30}px;
  width: 100%;

  @media (min-width: ${sizes.medium}px) {
    max-width: ${sizes.medium - 30}px;
  }

  @media (min-width: ${sizes.large}px) {
    max-width: ${sizes.large - 60}px;
  }
`;

export default Body;
