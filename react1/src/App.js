import React, { useState } from 'react';

function App() {
  const [contagem, setContagem] = useState(0);

  const botaoAction = () => {
    setContagem(contagem + 1);
  };

  return (
    <>
      <div>
        Resultado:
        {' '}
        {contagem}
      </div>
      <button type="button" onClick={botaoAction}>Clique aqui para aumentar</button>
    </>
  );
}

export default App;
