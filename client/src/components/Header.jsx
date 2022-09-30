import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  height: fit-content;
  background-color: var(--primary);

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 4.5rem;
    margin: 0 20px;
    color: var(--bg-color);
    font-family: var(--fontBebas);
  }
`;

function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>React CRUD</h1>
      </Link>
    </Container>
  );
}

export default Header;
