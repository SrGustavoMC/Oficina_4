// src/componentes/header.js
import React, { useState } from 'react'; // 1. Importe o useState
import { Link } from 'react-router-dom';
import Carrinho from './Carrinho'; // 2. Importe o Carrinho aqui

// 3. O Header agora recebe todos os dados e funções do carrinho
function Header({ quantidadeItens, itensDoCarrinho, onRemoverDoCarrinho, total }) { 
  // 4. Criamos um estado local para controlar a visibilidade do dropdown
  const [dropdownVisivel, setDropdownVisivel] = useState(false);

  // Função para alternar a visibilidade
  const toggleDropdown = () => {
    setDropdownVisivel(!dropdownVisivel);
  };

  return (
    <header className="cabecalho-principal">
      {/* ... (código do logo e nav não muda) ... */}
      <div className="logo-container">
        <Link to="/" className="link-logo">
          <h1>Fatality Shop</h1>
          <p className="slogan">Where gamers meet their destiny</p>
        </Link>
      </div>
      <nav className="menu-navegacao">
        <ul>
          <li><Link to="/">início</Link></li>
          <li className="dropdown">
            <Link to="/jogos">jogos</Link>
            <ul className="submenu">
              <li><Link to="/jogos/xbox">xbox</Link></li>
              <li><Link to="/jogos/playstation">playstation</Link></li>
              <li><Link to="/jogos/nintendo">nintendo</Link></li>
            </ul>
          </li>
          <li><Link to="/consoles">consoles</Link></li>
          <li><Link to="/acessorios">acessórios</Link></li>
          <li><Link to="/suporte">suporte</Link></li>
        </ul>
      </nav>

      {/* 5. O container do ícone do carrinho agora controla o dropdown */}
      <div id="cart-icon-container">
        <div id="cart-icon" onClick={toggleDropdown}>
          🛒
          <span id="cart-count">{quantidadeItens}</span>
        </div>
        
        {/* 6. O carrinho agora é renderizado aqui dentro */}
        <Carrinho 
          visivel={dropdownVisivel}
          itens={itensDoCarrinho}
          onRemoverDoCarrinho={onRemoverDoCarrinho}
          total={total}
        />
      </div>
    </header>
  );
}

export default Header;