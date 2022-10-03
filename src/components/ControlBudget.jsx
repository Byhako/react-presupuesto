import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ControlBudget = ({ budget, spents }) => {

  const formatNumber = n => n.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

  const [disponible, setdisponible] = useState(budget)
  const [gastado, setGastado] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const totalGastado = spents.reduce((total, gasto) => total + gasto.cantidad, 0)
    setGastado(totalGastado)
    const per = 100/budget * totalGastado
    setPercentage(per.toFixed(2))
    setdisponible(budget - totalGastado)
  }, [spents])

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#3b82f6',
            trailColor: '#777'
          })}
          value={percentage}
          text={`${percentage}% gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <p><span>Presupuesto: </span> {formatNumber(budget)}</p>
        <p><span>Disponible: </span> {formatNumber(disponible)}</p>
        <p><span>Gastado: </span> {formatNumber(gastado)}</p>
      </div>
    </div>
  )
}

export default ControlBudget
