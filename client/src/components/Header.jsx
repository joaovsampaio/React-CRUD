import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: var(--primary);

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0 20px;
    font-size: 5rem;
    color: var(--bg-color);
    font-family: var(--fontBebas);
  }
`;

function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>CRUD</h1>
      </Link>
    </Container>
  );
}

export default Header;
