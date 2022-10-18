import React from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.bgColor},
    ${({ theme }) => theme.colors.primary}
  );
`;

const Welcome = styled.div`
  width: 80%;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.other};
    font-size: 8rem;
    margin: 0;
    font-family: var(--fontBebas);
  }

  p {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Wrapper = styled.div`
  margin: 40px 0 20px 0;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.other};

  @media (min-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  span {
    margin-left: 15px;
    color: ${({ theme }) => theme.colors.text};
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  div {
    display: grid;

    ul {
      grid-row: 1/2;

      @media (max-width: 425px) {
        grid-row: auto;
      }

      li {
        font-size: 1.2rem;
        list-style: none;

        i {
          margin-right: 10px;
          color: ${({ theme }) => theme.colors.details};
        }

        a {
          color: #a1d0ea;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
            color: ${({ theme }) => theme.colors.details};
          }
        }
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
        <span>Clique abaixo para saber mais.</span>
        <div>
          <ul>
            <li>
              <i className="fa-brands fa-react" />
              <a href="https://pt-br.reactjs.org/">React</a>
            </li>
            <li>
              <i className="fa-solid fa-paintbrush" />
              <a href="https://styled-components.com/">Styled-Components</a>
            </li>
            <li>
              <i className="fa-solid fa-link" />
              <a href="https://reactrouter.com/en/main">React Router</a>
            </li>
          </ul>
          <ul>
            <li>
              <i className="fa-solid fa-server" />
              <a href="https://expressjs.com/pt-br/">Express</a>
            </li>
            <li>
              <i className="fa-brands fa-node-js" />
              <a href="https://nodejs.org/en/">Node</a>
            </li>
            <li>
              <i className="fa-solid fa-database" />
              <a href="https://www.mysql.com/">MySQL</a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </Container>
  );
}

export default Home;
