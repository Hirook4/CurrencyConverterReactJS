import React from 'react';
import './App.css';

import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1> Conversor de Moedas </h1>
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor> {/* Componente que transforma uma moeda em outra */}
        <Conversor moedaA="BRL" moedaB="USD"></Conversor> {/* Componente que transforma uma moeda em outra */}
      </div>
    </div>
  );
}

export default App;
