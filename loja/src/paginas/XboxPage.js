import React from 'react';
import ProdutoGrid from '../components/ProdutoGrid';
import { jogosXbox } from '../data/db';

function HomePage(props) {
  return (
    <ProdutoGrid 
      titulo="jogos Xbox"
      produtos={jogosXbox}
      {...props}
    />
  );
}

export default HomePage;