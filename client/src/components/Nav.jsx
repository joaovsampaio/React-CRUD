import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  div {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding-inline-start: 0;
    background-color: ${({ theme }) => theme.colors.other};
  }

  a {
    text-align: center;
    width: 100%;
    font-size: 1.5rem;
    font-family: var(--fontBebas);
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.bgColor};
    }
  }
`;

function Nav() {
  return (
    <Container>
      <div>
        <Link to="/register">Cadastro</Link>
        <Link to="/">Home</Link>
        <Link to="/table">Tabela</Link>
      </div>
    </Container>
  );
}

export default Nav;
