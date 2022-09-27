import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  background-color: var(--other);

  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding-inline-start: 0;

    a {
      font-size: 1.3rem;
      font-family: var(--fontBebas);
      color: var(--secondary);
      text-decoration: none;

      &:hover {
        color: var(--primary);
      }
    }
  }
`;

function Nav() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/register">Cadastro</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/table">Tabela</Link>
        </li>
      </ul>
    </Container>
  );
}

export default Nav;
