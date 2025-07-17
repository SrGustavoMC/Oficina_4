import React from 'react';
import ProdutoGrid from '../components/ProdutoGrid';
import { jogosNintendo } from '../data/db';

function HomePage(props) {
  return (
    <ProdutoGrid 
      titulo="Jogos Nintendo"
      produtos={jogosNintendo}
      {...props}
    />
  );
}

export default HomePage;