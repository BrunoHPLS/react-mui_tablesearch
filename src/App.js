import React from 'react';
import styled from 'styled-components';
import Table from './Table';

// import { Container } from './styles';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <Table></Table>
    </Container>
  );
}

export default App;