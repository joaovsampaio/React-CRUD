import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../assets/img/loading.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: var(--fontBebas);
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.title};
  }

  table {
    width: 90%;
    border-collapse: collapse;

    thead {
      font-size: 1.6rem;
      font-family: var(--fontBebas);

      th {
        border: 1px solid black;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.details};
      }
    }

    tbody {
      font-size: 1rem;
      text-align: center;
      font-weight: bold;

      td {
        padding: 10px;
        border: 1px solid #000;
        color: ${({ theme }) => theme.colors.text};
      }

      button {
        border: 0;
        font-size: 20px;

        &:hover {
          opacity: 0.5;
          cursor: pointer;
        }

        .fa-trash-can {
          color: #fc2a2a;
        }

        .fa-pen-to-square {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }

      td:has(button) {
        padding: 10px 25%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

function Table() {
  const [productsList, setProductsList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = () => {
      Axios.get("http://localhost:3001/products")
        .then((res) => {
          setProductsList(res.data);
        })
        .catch(() => {
          document.getElementById("loading").style.display = "block";
        });
    };

    getProducts();
  }, []);

  const updateProduct = (id) => {
    navigate(`/update${id}`);
  };

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/products/${id}`).then(() => {
      setProductsList(
        productsList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <Container>
      <h1>Tabela</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((val, key) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.produto}</td>
                <td>R${val.valor}</td>
                <td>
                  <button onClick={() => deleteProduct(val.id)} title="Exluir">
                    <i className="fa-solid fa-trash-can" />
                  </button>
                  <button onClick={() => updateProduct(val.id)} title="Editar">
                    <i className="fa-solid fa-pen-to-square" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <img
        src={Loading}
        alt="Carregando..."
        id="loading"
        style={{ display: "none" }}
      ></img>
    </Container>
  );
}

export default Table;
