import { useState } from "react";
import Hijo from "./Hijo";

function App() {
  const [mensaje, setMensaje] = useState("Vota por tu rey favorito")
  const sumar = (nombre, valoracion) => {
      setMensaje(<div>Has votado por el rey <span className="etiqueta">{nombre}</span> con una valoracion de <span className="etiqueta">{valoracion}</span></div>)
  }
  return (
    <>
    <h2>{mensaje}</h2>
    <div className="contenedor">
      <Hijo onAction = {sumar} datos = {{nombre: "Ervigio", vacas: 3}}/>
      <Hijo onAction = {sumar} datos = {{nombre: "Atanagildo", vacas: 9}}/>
      <Hijo onAction = {sumar} datos = {{nombre: "Ataúlfo", vacas: 11}}/>
      <Hijo onAction = {sumar} datos = {{nombre: "Leovigildo", vacas: 2}}/>          
    </div>
    </>
  );
}

export default App;
