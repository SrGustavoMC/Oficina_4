import React from 'react';
import ProdutoGrid from '../components/ProdutoGrid';
import { consoles } from '../data/db';

function HomePage(props) {
  return (
    <ProdutoGrid 
      titulo="Consoles em Destaque"
      produtos={consoles}
      {...props}
    />
  );
}

export default HomePage;