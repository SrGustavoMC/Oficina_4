// src/App.js

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas
import HomePage from './paginas/HomePage';
import XboxPage from './paginas/XboxPage';
import PlaystationPage from './paginas/PlaystationPage';
import NintendoPage from './paginas/NintendoPage';
import ConsolesPage from './paginas/ConsolesPage';
import AcessoriosPage from './paginas/AcessoriosPage';
import SuportePage from './paginas/SuportePage';

function App() {
  const [itensDoCarrinho, setItensDoCarrinho] = useState([]);
  
  // Lógica do carrinho (continua a mesma)
  const handleAdicionarAoCarrinho = (produto) => {
    if (!itensDoCarrinho.find(item => item.id === produto.id)) {
      setItensDoCarrinho(atuais => [...atuais, produto]);
    }
  };
  
  const handleRemoverDoCarrinho = (id) => {
    setItensDoCarrinho(atuais => atuais.filter(item => item.id !== id));
  };

  const calcularTotal = () => {
    return itensDoCarrinho.reduce((acc, item) => {
      const preco = parseFloat(item.precoatual.replace('R$ ', '').replace(',', '.'));
      return acc + preco;
    }, 0);
  };

  const totalDoCarrinho = calcularTotal();

  // Objeto com as props que serão passadas para as páginas de produtos
  const propsParaPaginas = {
    onAdicionarAoCarrinho: handleAdicionarAoCarrinho,
    onRemoverDoCarrinho: handleRemoverDoCarrinho,
    itensDoCarrinho: itensDoCarrinho,
  };

  return (
    <div className="app">
      {/* Passa as informações necessárias para o Header e o dropdown */}
      <Header 
        quantidadeItens={itensDoCarrinho.length}
        itensDoCarrinho={itensDoCarrinho}
        onRemoverDoCarrinho={handleRemoverDoCarrinho}
        total={totalDoCarrinho}
      />
      <main>
        <Routes>
          {/* CORREÇÃO: Garantir que cada página de produto receba as props */}
          <Route path="/" element={<HomePage {...propsParaPaginas} />} />
          <Route path="/jogos" element={<HomePage {...propsParaPaginas} />} />
          <Route path="/jogos/xbox" element={<XboxPage {...propsParaPaginas} />} />
          <Route path="/jogos/playstation" element={<PlaystationPage {...propsParaPaginas} />} />
          <Route path="/jogos/nintendo" element={<NintendoPage {...propsParaPaginas} />} />
          <Route path="/consoles" element={<ConsolesPage {...propsParaPaginas} />} />
          <Route path="/acessorios" element={<AcessoriosPage {...propsParaPaginas} />} />
          
          {/* A página de suporte não precisa das props do carrinho */}
          <Route path="/suporte" element={<SuportePage />} />
        </Routes>
      </main>
      
      {/* O Carrinho agora é renderizado dentro do Header, por isso foi removido daqui */}
      <Footer />
    </div>
  );
}

export default App;