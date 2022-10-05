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
    color: ${({ theme }) => theme.colors.title};
  }

  button {
    border: none;
    font-size: 1rem;
    padding: 5px;
    font-family: var(--fontBebas);
    cursor: pointer;

    &:first-of-type {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.other};
      margin: 15px 0 10px 0;
    }

    &:last-of-type {
      color: #fff;
      background-color: #fc2a2a;
    }

    &:hover {
      opacity: 0.7;
    }
  }

  label {
    font-size: 1.2em;
    margin: 10px 0;
  }

  input {
    background-color: #fff;
    font-size: 1.2em;
    font-family: var(--fontRoboto);

    &::placeholder {
      color: #cecccc;
    }
  }

  #wrapped {
    margin: 10px 0;
    padding: 20px;
    border: 1px solid;
    background-color: #fff;

    span {
      font-size: 1.2rem;
      background-color: ${({ theme }) => theme.colors.details};
      color: #fff;
      border-radius: 5px;
      padding: 3px;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 768px) {
    #wrapped {
      width: 30%;
    }
  }
`;

function Update() {
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

  const [productsList, setProductsList] = useState([]);
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
      {productsList.map((val, key) => {
        return (
          <div key={val.id} id="wrapped">
            <span>ID: {val.id}</span>
            <div>
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
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default Update;
