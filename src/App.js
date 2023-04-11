import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Contanier } from './components/Container/Container';

function App() {
  return (
    <div className="app">
      <Contanier> 
        <NavBar/>
        
        <Footer/>
      </Contanier>
      
    </div>
  );
}

export default App;