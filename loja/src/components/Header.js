
import React, { useState } from 'react'; // 1. Importe o useState
import { Link } from 'react-router-dom';
import Carrinho from './Carrinho'; // 2. Importe o Carrinho aqui


function Header({ quantidadeItens, itensDoCarrinho, onRemoverDoCarrinho, total }) { 
  
  const [dropdownVisivel, setDropdownVisivel] = useState(false);

  // Função para alternar a visibilidade
  const toggleDropdown = () => {
    setDropdownVisivel(!dropdownVisivel);
  };

  return (
    <header className="cabecalho-principal">
      {}
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

      {}
      <div id="cart-icon-container">
        <div id="cart-icon" onClick={toggleDropdown}>
          🛒
          <span id="cart-count">{quantidadeItens}</span>
        </div>
        
        {}
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