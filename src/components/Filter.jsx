const Filter = ({ filtro, setFiltro }) => {

  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="filtros">Filtrar gastos</label>
          <select
            name="filtros"
            id="filtros"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          >
            <option value="">-- Sin filtro --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filter
