import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Axios from "axios";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-family: var(--fontBebas);
    font-size: 3rem;
    color: var(--primary);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      align-self: flex-start;
      font-size: 1.5em;
      margin: 7px 0;
      font-weight: 200;
      font-family: var(--fontBebas);
    }

    input {
      background-color: #fff;
      height: 25px;
      width: 200px;
      font-size: 1.2em;
      font-family: var(--fontRoboto);
    }

    div {
      margin-top: 20px;
    }

    button {
      color: var(--bg-color);
      width: 90px;
      height: 40px;
      border: none;
      font-size: 20px;
      font-family: var(--fontRoboto);
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }

    button:first-child {
      margin-right: 20px;
      background-color: var(--secondary);
    }

    button:last-child {
      background-color: #fc2a2a;
    }
  }
`;

function Update() {
  const [newProduct, setNewProduct] = useState("");
  //const [newPrice, setNewPrice] = useState(0);

  /*const updateProduct = (id) => {
    Axios.put("http://localhost:3001/products", {
      product: newProduct,
      id: id,
    }).then((resp) => {
      console.log(resp);
    });
  };*/

  const [productsList, setProductsList] = useState([]);

  const getProducts = () => {
    Axios.get("http://localhost:3001/products").then((res) => {
      setProductsList(res.data);
    });
  };

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
      <h1>Atualizar Produto</h1>
      <div>
        <form>
          <label>Produto:</label>
          <input
            type="text"
            onChange={(e) => {
              setNewProduct(e.target.value);
            }}
          />

          <div>
            <button
              type="submit"
              onChange={() => {
                updateProduct(id);
              }}
            >
              Salvar
            </button>
            <button type="reset">Cancelar</button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Update;
