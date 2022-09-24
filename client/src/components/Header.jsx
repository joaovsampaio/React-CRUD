import React from 'react';
import styled from 'styled-components';

const Container = styled.header`

    display: flex;
    align-items: center;
    height: 100px;
    background-color: var(--raspberry);

    h1 {
        margin: 0 20px;
        font-size: 5rem;
        font-family: var(--fontBebas);
    }
`;

function Header() {
  return (
    <Container>
        <h1>CRUD</h1>
    </Container>
  )
}

export default Header;