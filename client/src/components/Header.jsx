import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 30px 0 0;

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 4.5rem;
    margin: 0 20px;
    color: #fdf7fa;
    font-family: var(--fontBebas);
  }
`;

function Header(props) {
  const btnSwitch = props.btnSwitch;

  return (
    <Container>
      <Link to="/">
        <h1>React CRUD</h1>
      </Link>
      <div>{btnSwitch}</div>
    </Container>
  );
}

export default Header;
