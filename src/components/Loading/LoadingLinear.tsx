import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

interface LoadingProps {
  text: string;
}

const LoadingLinear: React.FunctionComponent<LoadingProps> = ({
  text,
}: LoadingProps): React.ReactElement => (
  <LoadingContainer>
    <LoadingTitle>{text}</LoadingTitle>
    <StyledLinearProgress />
  </LoadingContainer>
);

export default LoadingLinear;

// Styled components

const LoadingContainer = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const LoadingTitle = styled('p')`
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 20px 0;
`;

const StyledLinearProgress = styled(LinearProgress)`
  width: 80%;
`;
