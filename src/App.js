import React from 'react';
import './css/style.css';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
