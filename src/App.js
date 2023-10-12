import React from 'react';
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer
        text="productos!"
        className="itemList"
      ></ItemListContainer>
      <button className="btn btn-primary">Botón de bootstrap</button>
      <button className="btn btn-secondary">Botón de bootstrap Secundario</button>
    </div>
    
  );
}

export default App;