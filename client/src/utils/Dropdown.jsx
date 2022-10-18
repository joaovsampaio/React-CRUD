import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownMenuTrigger = styled(DropdownMenu.DropdownMenuTrigger)`
  height: 35px;
  width: 35px;

  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  border: none;
`;

const DropdownMenuContent = styled(DropdownMenu.DropdownMenuContent)`
  background-color: ${({ theme }) => theme.colors.details};
  border-radius: 2px;
  padding: 5px;
`;

const DropdownMenuLabel = styled(DropdownMenu.DropdownMenuLabel)`
  font-family: var(--fontBebas);
  text-align: center;
  border-bottom: 1px solid;
  margin-bottom: 10px;
  color: #fff;
`;

const Links = styled(Link)`
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
`;

export default () => (
  <DropdownMenu.Root>
    <DropdownMenuTrigger className="fa-solid fa-bars" />

    <DropdownMenuContent>
      <DropdownMenuLabel>React Crud</DropdownMenuLabel>

      <DropdownMenu.Item>
        <Links to="/">Home</Links>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Links to="/register">Cadastro</Links>
      </DropdownMenu.Item>
      <DropdownMenu.Item>
        <Links to="/table">Tabela</Links>
      </DropdownMenu.Item>
    </DropdownMenuContent>
  </DropdownMenu.Root>
);
