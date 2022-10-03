import { useEffect, useState } from "react"

const ControlBudget = ({ budget, setBudget, spents }) => {

  const formatNumber = n => n.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

  const [disponible, setdisponible] = useState(budget)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = spents.reduce((total, gasto) => total + gasto.cantidad, 0)
    setGastado(totalGastado)
    setdisponible(budget - totalGastado)
  }, [spents])

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        grafica aqui
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
