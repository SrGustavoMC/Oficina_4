import React from 'react';
import ProdutoCard from './ProdutoCard';

function ProdutoGrid({ titulo, produtos, ...props }) {
  return (
    <div className="container">
      <h2 className="section-title">{titulo}</h2>
      <div className="games-grid">
        {produtos.map(produto => (
          <ProdutoCard
            key={produto.id}
            produto={produto}
            {...props}
          />
        ))}
      </div>
    </div>
  );
}

export default ProdutoGrid;