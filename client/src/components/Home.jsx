import React from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Welcome = styled.div`
  margin-top: 80px;
  width: 80%;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.other};
    font-size: 4rem;
    font-family: var(--fontBebas);
  }

  p {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Wrapper = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  margin: 40px 0 20px 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.other};

  h2 {
    text-align: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  div {
    display: grid;

    ul {
      grid-row: 1/2;

      li {
        font-size: 1.2rem;
        list-style: circle;
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;

function Home() {
  return (
    <Container>
      <Welcome>
        <h1>Bem Vindo!</h1>
        <p>Este é um simples CRUD.</p>
      </Welcome>
      <Wrapper>
        <h2>Principais Técnologias:</h2>
        <div>
          <ul>
            <li>React</li>
            <li>Styled-Components</li>
            <li>React Router</li>
          </ul>
          <ul>
            <li>Express</li>
            <li>Node</li>
            <li>MySQL</li>
          </ul>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Home;
