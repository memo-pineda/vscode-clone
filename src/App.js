import styled from '@emotion/styled';
import NavBar from './components/NavBar';

const Container = styled.div`
  display: flex;
`

function App() {
  return (
    <Container>
      <NavBar />
      <div className="editor">Awww snap</div>
    </Container>
  );
}

export default App;
