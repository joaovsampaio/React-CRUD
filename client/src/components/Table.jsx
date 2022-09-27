import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import Register from "./Register";
import { v4 as uuidv4 } from "uuid";

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
  const [productsList, setProductsList] = useState([]);

  const getProducts = () => {
    Axios.get("http://localhost:3001/products").then((res) => {
      setProductsList(res.data);
    });
  };

  /*{
    productsList.map((val, key) => {
      return (
        <div>
          <th>{val.id}</th>
          <th>{val.produto}</th>
          <th>{val.valor}</th>
        </div>
      );
    });
  }*/
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((val, key) => {
            console.log(val.id);
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.produto}</td>
                <td>R${val.valor}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={getProducts}>Listar</button>
    </Container>
  );
}

export default Table;
