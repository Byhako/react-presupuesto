const ControlBudget = ({ budget, setBudget }) => {

  const formatNumber = n => n.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        grafica aqui
      </div>

      <div className="contenido-presupuesto">
        <p><span>Presupuesto: </span> {formatNumber(budget)}</p>
        <p><span>Disponible: </span> {formatNumber(budget)}</p>
        <p><span>Gastado: </span> {formatNumber(budget)}</p>
      </div>
    </div>
  )
}

export default ControlBudget
