import React from 'react';
import styled from 'styled-components';

function Ola() {
  return 'Osmar';
}

function Hello() {
  return 'Jaqueline Meira de Araujo';
}

const Site = styled.div`
  width: 400px;
  height: 400px;
  background-color: #00ff00;
`;
const Botao = styled.button`
  font-size:20px
  padding: 10px 15px
`;

function App() {
  return (

    <Site>
      {Ola}
      {Hello}
      <Botao> Clique Aqui</Botao>
      <Botao> Depois Clique Aqui</Botao>
    </Site>
  );
}

export default App;
