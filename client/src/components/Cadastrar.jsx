import React from 'react';
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
            font-family: BebasNeueRegular, Open-Sans, Helvetica, Sans-Serif;
        }

        input {
            height: 25px;
            width: 200px;
            font-size: 1.2em;
            font-family: RobotoLight, Open-Sans, Helvetica, Sans-Serif;
        }

        button {
        
        }
    }

`;

function Cadastrar() {
  return (
    <Container>
        <form>
            <label>Produto:</label>
            <input type="text"/>
            <label>ID:</label>
            <input type="number"/>
            <label>Preço:</label>
            <input type="number"/>

            <div>
                <button type="submit">Salvar</button>
                <button>Cancelar</button>
            </div>
        </form>
    </Container> 
  )
}

export default Cadastrar;