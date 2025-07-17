import React from 'react';
import ProdutoGrid from '../components/ProdutoGrid';
import { jogosPlaystation } from '../data/db';

function HomePage(props) {
  return (
    <ProdutoGrid 
      titulo="jogos Playstation"
      produtos={jogosPlaystation}
      {...props}
    />
  );
}

export default HomePage;