import React from "react";

function BemVindo(props){
  return(
    <div>
      <h1>Osmar {props.name} vc tem: {props.idade} anos</h1>
    </div>
  )
}

function Avatar(props) {
  return (
    <div>
      <img src={props.url} alt={props.name}></img> <br />
      <span>{props.name}</span>
    </div>
  );
}

function App() {
  return (
    <div>
      <div>
        <BemVindo name="Lima" idade="35"/>
      </div>
    
    <div>
      <Avatar url="https://www.google.com.br/google.jpg" name="Osmar Lima" />
    </div>

    </div>
  );
}

// chamando o componente
export default App;
