import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loading from "../assets/img/loading.gif";
import { dbDeleteProduct, getProducts, queryDb } from "../utils/http";
import { ModalError } from "../utils/Modal";

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
      button {
        font-family: var(--fontBebas);
        font-size: 1.6rem;
        border: none;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.details};
      }

      th {
        font-family: var(--fontBebas);
        font-size: 1.6rem;
        border: 1px solid black;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.details};
      }

      i {
        font-size: 20px;
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

    #tableInfo {
      background-color: ${({ theme }) => theme.colors.other};
      color: ${({ theme }) => theme.colors.text};

      td:has(button) {
        padding: 10px 25%;
        display: flex;
        justify-content: center;
      }

      button {
        width: 100%;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.details};
      }
    }
  }

  @media (max-width: 760px) {
    table {
      display: block;
      max-width: -moz-fit-content;
      max-width: fit-content;
      margin: 0 auto;
      overflow-x: auto;
      white-space: nowrap;
      tbody {
        td:has(button) {
          padding: 10px 50%;
          display: flex;
          justify-content: center;
        }
      }

      #tableInfo {
        button {
          width: fit-content;
        }
      }
    }
  }
`;

const Fallback = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

function Table() {
  const [productsList, setProductsList] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  const [maxLength, setMaxLength] = useState(0);
  const [avarage, setAvarage] = useState(0);
  const [valueMode, setValueMode] = useState(false);
  const [queryOrder, setQueryOrder] = useState(true);
  const [iconId, setIconId] = useState("fa-solid fa-sort");
  const [iconProduct, setIconProduct] = useState("fa-solid fa-sort");
  const [iconValue, setIconValue] = useState("fa-solid fa-sort");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      setLoading(false);
      setProductsList(response);
    } catch {
      ModalError();
    }
  };

  const queryData = async () => {
    const response = await getProducts();
    const columnValor = response.map((item) => item.valor);
    setMaxValue(
      columnValor.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
    setMaxLength(response.length);
    setAvarage(columnValor.reduce((a, b) => a + b, 0) / response.length || 0);
  };

  useEffect(() => {
    fetchData();
    queryData();
  }, []);

  const updateProduct = (id) => {
    navigate(`/update/${id}`);
  };

  const deleteProduct = async (id) => {
    try {
      await dbDeleteProduct(id);
      setProductsList(
        productsList.filter((val) => {
          return val.id != id;
        })
      );
    } catch {
      ModalError();
    }
  };

  const iconQuery = (column) => {
    if (column === "id" && queryOrder === false) {
      setIconId("fa-solid fa-sort-down");
    } else {
      setIconId("fa-solid fa-sort-up");
    }

    if (column === "produto" && queryOrder === false) {
      setIconProduct("fa-solid fa-sort-down");
    } else {
      setIconProduct("fa-solid fa-sort-up");
    }

    if (column === "valor" && queryOrder === false) {
      setIconValue("fa-solid fa-sort-down");
    } else {
      setIconValue("fa-solid fa-sort-up");
    }
  };

  const fetchOrder = async (column) => {
    try {
      setLoading(true);
      const response = await queryDb(column);
      setLoading(false);
      setQueryOrder(!queryOrder);
      iconQuery(column);
      setProductsList(response);
      queryOrder === false && setProductsList(response.reverse());
    } catch {
      ModalError();
    }
  };

  if (loading) {
    return (
      <Fallback>
        <img src={Loading} alt="Carregando..." />
      </Fallback>
    );
  }

  return (
    <Container>
      <h1>Tabela</h1>
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => fetchOrder("id")}>
                ID
                <i className={iconId} />
              </button>
            </th>
            <th>
              <button onClick={() => fetchOrder("produto")}>
                Produto
                <i className={iconProduct} />
              </button>
            </th>
            <th>
              <button onClick={() => fetchOrder("valor")}>
                Preço
                <i className={iconValue} />
              </button>
            </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((val) => {
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
          <tr id="tableInfo">
            <td>{valueMode ? "Média:" : "Total:"}</td>
            <td>{maxLength}</td>
            <td>R${valueMode ? avarage : maxValue}</td>
            <td>
              <button onClick={() => setValueMode(!valueMode)}>
                <i className={valueMode ? "fa-solid fa-m" : "fa-solid fa-t"} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default Table;
