import styled from '@emotion/styled';
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt2,
  VscExtensions,
  VscAccount,
  VscGear,
  VscBeaker
} from 'react-icons/vsc';
import { IconContext } from 'react-icons';
import NavBar from './components/NavBar';

/** STYLING */
const Container = styled.div`
  display: flex;
`;

const itemClass = {
  marginBottom: '0.75rem',
  color: '#7E7E7E'
};

function App() {
  const TOP_ICONS = [
    <VscFiles />,
    <VscSearch />,
    <VscSourceControl />,
    <VscDebugAlt2 />,
    <VscExtensions />
  ];

  const BOTTOM_ICONS = [
    <VscAccount />,
    <VscGear />
  ];

  return (
    <Container>
      <NavBar topElements={TOP_ICONS} bottomElements={BOTTOM_ICONS} itemClass={itemClass}/>
      <LandingPage />
    </Container>
  );
}

const LandingContainer = styled.div`
  align-items: center;
  background-color: #1E1E1E;
  display: flex;
  justify-content: center;
  width: 100vw;
`

const LandingContent = styled.div`
  & > p {
    color: #898989;
    text-align: center;
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;
// icons next to shortcut #2C2C2C
const LandingPage = () => (
  <LandingContainer>
    <LandingContent>
      <IconContext.Provider value={{color: '#151515', size: '16rem'}}>
        <VscBeaker />
      </IconContext.Provider>
      <p>
        Show All Commands
        {' '}
        <div>

        </div>
      </p>
      <p>
        Go to File
        {' '}
        <div>
          
        </div>
      </p>
      <p>Find in Files</p>
      <p>Start Debugging</p>
      <p>Toggle Terminal</p>
    </LandingContent>
  </LandingContainer>
)

export default App;
