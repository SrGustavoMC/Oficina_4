import React from 'react';
import ProdutoGrid from '../components/ProdutoGrid';
import { jogosDestaque } from '../data/db';

function HomePage(props) {
  return (
    <ProdutoGrid 
      titulo="Jogos Destaque"
      produtos={jogosDestaque}
      {...props}
    />
  );
}

export default HomePage;