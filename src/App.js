import React from "react";
import "./App.css";

function App() {
  const botaomaluco = () => {
    const botao = document.getElementById("fugitivo");
    const novaPosicaoX =
      Math.random() * (window.innerWidth - botao.clientWidth);
    const novaPosicaoY =
      Math.random() * (window.innerHeight - botao.clientHeight);

    botao.style.left = `${novaPosicaoX}px`;
    botao.style.top = `${novaPosicaoY}px`;
  };

  return (
    <div className="App">
      <button id="fugitivo" className="fugitivo" onMouseOver={botaomaluco}>
        Clique em mim{" "}
      </button>{" "}
    </div>
  );
}

export default App;
