import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    position: fixed;
    bottom: 0;
    background-color: var(--satin);
    width: 100%;
    height: 50px;

    div {
        display: flex;
        justify-content: end;
        padding: 15px;
        font-family: Open-Sans, Helvetica, Sans-Serif;

        span {
            font-size: 1.2rem;
            color: #fff;
        }

        a {
            margin-left: 5px;
            text-decoration: none;
            color: var(--ultramarine);

            &:hover {
                color: var(--blue);
                text-decoration: underline;
            }
        }
    }
`;

function Footer() {
  return (
    <Container>
        <div>
            <span>Feito por: 
                <a href='https://github.com/joaovsampaio'>
                    @joaovsampaio
                </a>
            </span>
        </div>
    </Container>
  )
}

export default Footer;