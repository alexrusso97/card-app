import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Preferiti from './components/Preferiti';
import Navbar from './components/Navbar';



function App() {
  const [currentPage, setCurrentPage] = useState<string>("Home")

function changePage(p: string) {
  setCurrentPage(p);
}

  return (
    <>
      <Navbar cambioPagina={changePage}></Navbar>
      {(currentPage === "Home") ?
        <Home></Home>
        :
        <Preferiti></Preferiti>
      }
    </>
  )
}

export default App;
