import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { ModalSuccess, ModalError } from "../utils/Modal";

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

  button {
    border: none;
    font-size: 1rem;
    font-family: var(--fontBebas);
    cursor: pointer;

    &:first-of-type {
      color: var(--bg-color);
      background-color: var(--primary);
    }

    &:last-of-type {
      color: var(--bg-color);
      background-color: #fc2a2a;
    }

    &:hover {
      opacity: 0.7;
    }
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
      font-weight: bold;

      label {
        font-size: 1.2em;
      }

      input {
        background-color: #fff;
        font-size: 1.2em;
        font-family: var(--fontRoboto);
      }

      td {
        padding: 20px;
        border: 1px solid;
      }

      td:first-child {
        text-align: center;
      }

      @media (max-width: 1023px) {
        td:last-child {
          display: flex;
          flex-direction: column;
        }

        button {
          margin: 5px 0;
        }

        label {
          margin-bottom: 5px;
        }
        input {
          margin-bottom: 10px;
        }
      }

      @media (min-width: 1024px) {
        td:last-child {
          display: flex;
          justify-content: space-between;
        }

        button {
          height: 100%;
          width: 10%;
        }
      }
    }
  }
`;

function Update() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      Axios.get("http://localhost:3001/products")
        .then((res) => {
          setProductsList(res.data);
        })
        .catch(() => alert("Algo deu Errado"));
    };

    getProducts();
  }, []);

  const [newProduct, setNewProduct] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  const updateProduct = (id) => {
    Axios.put("http://localhost:3001/products", {
      product: newProduct,
      price: newPrice,
      id: id,
    })
      .then((resp) => {
        ModalSuccess();
      })
      .catch(() => {
        ModalError();
      });
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
      <h1>Editar Tabela</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((val, key) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>
                  <label>Produto:</label>
                  <input
                    type="text"
                    placeholder={val.produto}
                    onChange={(e) => {
                      setNewProduct(e.target.value);
                    }}
                  />

                  <label>Preço:</label>
                  <input
                    type="number"
                    placeholder={val.valor}
                    onChange={(e) => {
                      setNewPrice(e.target.value);
                    }}
                  />

                  <button
                    type="submit"
                    onClick={() => {
                      updateProduct(val.id);
                    }}
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() => {
                      deleteProduct(val.id);
                    }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

export default Update;
