import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  table {
    width: 45%;
    border-collapse: collapse;

    thead {
      font-size: 1.6rem;
      font-family: var(--fontBebas);

      th {
        border: 1px solid black;
        background-color: var(--details);
      }
    }

    tbody {
      font-size: 1rem;
      text-align: center;
      font-weight: bold;

      td {
        padding: 10px;
        border: 1px solid;
      }
    }
  }
`;

function Table() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produtos</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Teste</td>
            <td>R$000000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Teste</td>
            <td>R$000000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Teste</td>
            <td>R$000000</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default Table;
