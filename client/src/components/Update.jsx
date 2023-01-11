import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { ModalSuccess, ModalError } from "../utils/Modal";
import { useParams } from "react-router-dom";

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
    color: #fff;
    background-color: ${({ theme }) => theme.colors.other};
    margin: 15px 0 10px 0;
    cursor: pointer;

    &:disabled {
      opacity: 0.1;
      cursor: not-allowed;
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

    form {
      display: flex;
      flex-direction: column;
    }

    p {
      color: #fc2a2a;
      font-family: var(--fontBebas);
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    #wrapped {
      width: 30%;
    }
  }
`;

function Update() {
  let { productId } = useParams();

  const [productsList, setProductsList] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [helperText, setHelperText] = useState("");

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

  useEffect(() => {
    let product_length = newProduct.length >= 1;
    let price_length = newPrice.length >= 1;

    if (product_length && price_length) {
      setBtnDisabled(false);
      setHelperText("");
    } else {
      setBtnDisabled(true);
      setHelperText("Os Dois Campos Devem Ser Preenchidos!");
    }
  }, [newProduct, newPrice]);

  const updateProduct = (id) => {
    Axios.put("http://localhost:3001/products", {
      product: newProduct,
      price: newPrice,
      id: id,
    })
      .then(() => {
        ModalSuccess();
      })
      .catch(() => {
        ModalError();
      });
  };

  const productsListFilter = productsList.filter((val) => {
    return val.id == productId;
  });

  return (
    <Container>
      <h1>Editar</h1>
      {productsListFilter.map((val) => {
        return (
          <div key={val.id} id="wrapped">
            <span>ID: {val.id}</span>
            <form>
              <label htmlFor="product">Produto:</label>
              <input
                type="text"
                name="product"
                id="product"
                required
                placeholder={val.produto}
                defaultValue={val.produto}
                onChange={(e) => {
                  setNewProduct(e.target.value);
                }}
              />

              <label htmlFor="price">Preço:</label>
              <input
                type="number"
                name="price"
                id="price"
                required
                placeholder={val.valor}
                defaultValue={val.valor}
                onChange={(e) => {
                  setNewPrice(e.target.value);
                }}
              />

              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  updateProduct(val.id);
                }}
                disabled={btnDisabled}
              >
                Salvar
              </button>
              <p>{helperText}</p>
            </form>
          </div>
        );
      })}
    </Container>
  );
}

export default Update;
