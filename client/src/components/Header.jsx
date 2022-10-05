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
    margin: 0 20px;
    color: #fdf7fa;
    font-family: var(--fontBebas);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 2.2rem;
    }
  }

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 30px;
      margin: 0 5px;

      &:first-of-type {
        color: ${({ theme }) => theme.colors.sun};
      }

      &:last-of-type {
        color: ${({ theme }) => theme.colors.moon};
      }
    }
  }
`;

function Header(props) {
  const btnSwitch = props.btnSwitch;

  return (
    <Container>
      <Link to="/">
        <h1>React CRUD</h1>
      </Link>
      <div>
        <span>&#9728;</span>
        {btnSwitch}
        <span>&#9790;</span>
      </div>
    </Container>
  );
}

export default Header;
