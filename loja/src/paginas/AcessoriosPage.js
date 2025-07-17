import React from 'react';
import ProdutoGrid from '../components/ProdutoGrid';
import { acessorios } from '../data/db';

function HomePage(props) {
  return (
    <ProdutoGrid 
      titulo="Acessórios Fatality"
      produtos={acessorios}
      {...props}
    />
  );
}

export default HomePage;