import { useEffect, useState } from "react"

const Hijo = ({datos, onAction}) => {
    const {nombre, vacas} = datos
    const [valoracion, setValoracion] = useState(0)
    const votar = () => {
        setValoracion(valoracion+1)
    }
    useEffect(()=>{
        onAction(nombre,valoracion)
    },[valoracion])
    const im=`http://www.html6.es/img/rey_${nombre.toLowerCase()}.png`
  return (
    <div className="cadaRey">
        <h1>{nombre}</h1>
        <div className="menu">
            Come {vacas} vacas al dia
        </div>
        <div>
            <img src = {im} alt = {nombre}/>
        </div>
        <div className="cajaVotacion">
            <button onClick={votar}>Votame</button>
            <div className="votacion">{valoracion}</div>    
        </div> 
    </div>
  )
}

export default Hijo
