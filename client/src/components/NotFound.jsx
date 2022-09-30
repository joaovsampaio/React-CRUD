import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  height: 100vh;

  h1 {
    font-size: 8rem;
    color: var(--secondary);
    text-align: center;
  }

  span {
    color: var(--secondary);
    text-align: center;
    font-size: 1.5rem;
  }
`;

function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <span>Página Não Encontrada</span>
    </Container>
  );
}

export default NotFound;
