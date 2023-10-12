import React from 'react';
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer title="productos!" /> 
    </div>
  );
}

export default App;
