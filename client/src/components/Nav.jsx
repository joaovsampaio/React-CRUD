import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  align-items: center;

  a {
    font-size: 1.2rem;
    margin: 0 10px;
    color: ${({ theme }) => theme.colors.other};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.bgColor};
    }
  }
`;

function Nav() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/register">Cadastro</Link>
      <Link to="/table">Tabela</Link>
    </Container>
  );
}

export default Nav;
