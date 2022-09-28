import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";

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

function Update() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      Axios.get("http://localhost:3001/products").then((res) => {
        setProductsList(res.data);
      });
    };

    getProducts();
  }, []);

  const [newProduct, setNewProduct] = useState("");
  //const [newPrice, setNewPrice] = useState(0);

  const updateProduct = (id) => {
    Axios.put("http://localhost:3001/products", {
      product: newProduct,
      id: id,
    }).then((resp) => {
      console.log(resp);
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
                  <input
                    type="text"
                    onChange={(e) => {
                      setNewProduct(e.target.value);
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
                  <button>Excluir</button>
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