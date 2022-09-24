import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 60px;

        label {
            font-size: 1.5em;
            margin: 7px 0;
            font-weight: 200;
            align-self: flex-start;
            font-family: var(--fontBebas);
        }

        input {
            height: 25px;
            width: 200px;
            font-size: 1.2em;
            font-family: var(--fontRoboto);
        }

        div {
            margin-top: 20px;
        }

        button {
            color: #fff;
            padding: 5px 10px;
            border: 1px solid #fff;
            font-size: 20px;
            font-family: var(--fontRoboto);
            cursor: pointer;

            &:hover {
                opacity: 0.7;
            }
        }

        button:first-child {
            margin-right: 20px;
            background-color: var(--blue);
        }

        button:last-child{
            background-color: var(--raspberry);
        }
    }
`;

function Cadastrar() {

    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");

  return (
    <Container>
        <form>

            <label>Produto:</label>
            <input 
            type="text" 
            onChange={(e) => {
                setProduct(e.target.value)
            }}
            />

            <label>Valor:</label>
            <input 
            type="number"
            onChange={(e) => {
                setPrice(e.target.value)
            }}
            />

            <div>
                <button type="submit">Salvar</button>
                <button>Cancelar</button>
            </div>
            
        </form>
    </Container> 
  )
}

export default Cadastrar;