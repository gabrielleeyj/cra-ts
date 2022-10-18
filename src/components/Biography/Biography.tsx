import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import styled from 'styled-components';

interface PropsFromState {
  briefBio: string;
  fullBio: string;
}

export type IProps = PropsFromState;

type BioOptions = 'brief' | 'full';

const Biography: React.FunctionComponent<IProps> = (props: IProps): React.ReactElement => {
  const [bioToggleOption, setBioToggleOption] = React.useState('brief');

  const handleBio = (
    _event: React.MouseEvent<HTMLElement>,
    newBioOption: BioOptions,
  ): void => {
    if (newBioOption !== null) {
      setBioToggleOption(newBioOption);
    }
  };

  return (
    <React.Fragment>
      <BioBar>
        <BioTitle>Biography</BioTitle>
        <ToggleButtonGroupStyled
          value={bioToggleOption}
          exclusive={true}
          onChange={handleBio}
          aria-label="text alignment"
          size={'small'}
        >
          <ToggleButton value="brief" aria-label="Brief">
            Brief
          </ToggleButton>
          <ToggleButton value="full" aria-label="Full">
            Full
          </ToggleButton>
        </ToggleButtonGroupStyled>
      </BioBar>
      <BioContainer>
        <BioContent
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html:
              bioToggleOption === 'brief'
                ? props.briefBio
                : props.fullBio,
          }}
        />
      </BioContainer>
    </React.Fragment>
  );
}

export default Biography;

// Styled components

const BioBar = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  width: 100%;
`;
const BioTitle = styled('p')`
  font-size: 24px;
  height: 30px;
`;
const ToggleButtonGroupStyled = styled(ToggleButtonGroup)`
  background-color: white;
  height: 30px;
  margin-right: 10px;
`;

const BioContent = styled('div')`
  font-size: 16px;
  height: 100%;
  white-space: pre-line;
`;

const BioContainer = styled('div')`
  font-size: 16px;
  padding: 10px;
  white-space: pre-line;
`;
