import React from "react";
import styled from "styled-components";

const Title = styled.h1`

  color: red;
  font-size: 18px;
  background-color: #ccc;
  border: 1px solid black;

`;

function App() {
  return (
    <div>
      <div>
        <Title>Título bem legal!</Title>
      </div>
    </div>
  );
}

export default App
