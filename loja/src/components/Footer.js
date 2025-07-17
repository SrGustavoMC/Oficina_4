import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section sobre-nos">
          <h3>sobre nós</h3>
          <p>A Fatality Shop é a loja definitiva para gamers hardcore. Oferecemos os melhores jogos, consoles e acessórios.</p>
          <p>Fortaleza - Ce, Brasil</p>
        </div>
        <div className="footer-section links-rapidos">
          <h3>links rápidos</h3>
          <ul>
            <li><Link to="/jogos/nintendo">Nintendo</Link></li>
            <li><Link to="/jogos/xbox">Xbox</Link></li>
            <li><Link to="/jogos/playstation">Playstation</Link></li>
            <li><Link to="/consoles">Consoles</Link></li>
            <li><Link to="/acessorios">Acessórios</Link></li>
            <li><Link to="/suporte">Suporte</Link></li>
          </ul>
        </div>
        <div className="footer-section redes-sociais">
          <h3>redes sociais</h3>
          {}
          <p>contato@fatalityshop.com.br</p>
        </div>
      </div>
      <div className="copyright">
        &copy; 2025 fatality shop. todos os direitos reservados. | desenvolvido por eduardo
      </div>
    </footer>
  );
}

export default Footer;