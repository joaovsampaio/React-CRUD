import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import Switch from "react-switch";
import Nav from "./Nav";
import Dropdown from "../utils/Dropdown";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const Logo = styled.div`
  h1 {
    font-family: var(--fontBebas);
    margin: 0;
    padding: 10px 10px;
    color: ${({ theme }) => theme.colors.details};
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 374px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 375px) {
    h1 {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4.5rem;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 60%;
  padding: 10px 20px;
  border-radius: 20px 0 0 20px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    #nav {
      display: none;
    }
  }

  @media (min-width: 769px) {
    #dropdown {
      display: none;
    }
  }

  #switch {
    display: flex;

    i {
      font-size: 1.3rem;
      margin: 0 8px;
      border-radius: 15px;
      padding: 5px;

      &:first-of-type {
        color: ${({ theme }) => theme.colors.sun};
        background-color: ${({ theme }) => theme.colors.other};
      }

      &:last-of-type {
        color: ${({ theme }) => theme.colors.moon};
        background-color: ${({ theme }) => theme.colors.other};
      }
    }
  }
`;

function Header({ HandleThemeChange }) {
  const { name, colors } = useContext(ThemeContext);
  return (
    <Container>
      <Logo>
        <Link to="/">
          <h1>React CRUD</h1>
        </Link>
      </Logo>
      <Wrap>
        <div id="nav">
          <Nav />
        </div>
        <div id="switch">
          <i className="fa-solid fa-sun" />
          <Switch
            onChange={HandleThemeChange}
            checked={name === "dark"}
            uncheckedIcon={false}
            checkedIcon={false}
            offColor={colors.details}
            onColor={colors.details}
          />
          <i className="fa-solid fa-moon" />
        </div>
        <div id="dropdown">
          <Dropdown />
        </div>
      </Wrap>
    </Container>
  );
}

export default Header;
