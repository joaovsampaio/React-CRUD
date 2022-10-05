import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 50px;
  margin-top: auto;

  div {
    display: flex;
    justify-content: end;
    padding: 15px;
    font-family: Open-Sans, Helvetica, Sans-Serif;

    span {
      font-size: 1.2rem;
      color: #fdf7fa;
    }

    a {
      margin-left: 5px;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.other};

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: underline;
      }
    }
  }
`;

function Footer() {
  return (
    <Container>
      <div>
        <span>
          Feito por:
          <a href="https://github.com/joaovsampaio">@joaovsampaio</a>
        </span>
      </div>
    </Container>
  );
}

export default Footer;
