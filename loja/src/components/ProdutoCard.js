import React from 'react';

function ProdutoCard({ produto, onAdicionarAoCarrinho, onRemoverDoCarrinho, itensDoCarrinho }) {
  const itemEstaNoCarrinho = itensDoCarrinho.find(item => item.id === produto.id);

  const handleToggleCarrinho = () => {
    if (itemEstaNoCarrinho) {
      onRemoverDoCarrinho(produto.id);
    } else {
      onAdicionarAoCarrinho(produto);
    }
  };

  return (
    <div className="game-card">
      <img src={produto.imagem} alt={produto.nome} />
      <div className="game-info">
        <h2>{produto.nome}</h2>
        {produto.descricao && <p className="descricao-produto">{produto.descricao}</p>}
        <div className="price">
          {produto.precoatual}
          <span className="old-price">{produto.precooriginal}</span>
        </div>
      </div>
      <div className="botao-container">
        <div 
          className={`botao ${itemEstaNoCarrinho ? 'adicionado' : ''}`}
          onClick={handleToggleCarrinho}
        >
          {itemEstaNoCarrinho ? 'remover' : 'adicionar'}
        </div>
      </div>
    </div>
  );
}

export default ProdutoCard;