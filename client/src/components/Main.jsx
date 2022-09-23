import React from 'react';
import Cadastrar from './Cadastrar';
import styled from 'styled-components';

const Container = styled.main`

        display: flex;
        flex-direction: column;
        align-items: center;
`;

function Main() {
  return (
    <Container>
      <Cadastrar />
    </Container>
  )
}

export default Main;