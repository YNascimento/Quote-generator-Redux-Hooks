import React from 'react';
import { QuoteGenerator } from './features/QuoteGenerator/QuoteGenerator';
import { Header } from './features/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <QuoteGenerator />
      </header>
    </div>
  );
}

export default App;
