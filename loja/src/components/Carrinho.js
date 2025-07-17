// src/components/carrinho.js
import React from 'react';

function Carrinho({ itens, visivel, onEsconderCarrinho, onRemoverDoCarrinho, total }) {
  // Se não estiver visível, não renderiza nada
  if (!visivel) {
    return null;
  }

  // A estrutura de um modal simples
  return (
    <div id="cart-modal">
      <div className="cart-modal-content">
        <div className="cart-header">
          <h2>Seu Carrinho</h2>
          <button className="close-cart" onClick={onEsconderCarrinho}>&times;</button>
        </div>
        <ul className="cart-items-list">
          {itens.length === 0 ? (
            <li className="carrinho-vazio">Seu carrinho está vazio.</li>
          ) : (
            itens.map(item => (
  <li key={item.id} className="cart-item">
    {/* IMAGEM ADICIONADA AQUI */}
    <img src={item.imagem} alt={item.nome} className="cart-item-imagem" />

    <div className="cart-item-info">
      <span className="item-name">{item.nome}</span>
      <span className="item-price">{item.precoatual}</span>
    </div>
    
    <button className="remove-item" onClick={() => onRemoverDoCarrinho(item.id)}>
      Retirar
    </button>
  </li>
))
          )}
        </ul>
        {itens.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>
            <button className="checkout">Finalizar Compra</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrinho;