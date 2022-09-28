import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;

  h1 {
    font-family: var(--fontBebas);
    font-size: 3rem;
    color: var(--primary);
  }

  table {
    width: 90%;
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

  useEffect(() => {
    const getProducts = () => {
      Axios.get("http://localhost:3001/products").then((res) => {
        setProductsList(res.data);
      });
    };

    getProducts();
  }, []);

  return (
    <Container>
      <h1>Tabela</h1>
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
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.produto}</td>
                <td>R${val.valor}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Link to="/update">
                <button>Editar</button>
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </Container>
  );
}

export default Table;
