import React, { useState } from 'react';
import imgmanual from "./img/calidad_educativa.png";
import './App.css';

function App() {
  const [document, setDocument] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setDocument(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que quieras con el documento, como enviarlo a un servidor
    console.log(document);
    // Reinicia el estado del documento
    setDocument(null);
  };

  const reqApi = () => {
    console.log("Clicking");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Manual para la implementación de los estándares de calidad educativa</h1>
        <img src={imgmanual} alt="manual" className="img-home" />
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Enviar</button>
        </form>
      </header>
    </div>
  );
}

export default App;