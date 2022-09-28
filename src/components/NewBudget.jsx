

const NewBudget = () => {

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario'>
        <div className="campo">
          <label htmlFor="nuevo-presupuesto">Definir Presupuesto</label>
          <input
            type="text"
            className='nuevo-presupuesto'
            placeholder='Agrega tu presupuesto'
            id='nuevo-presupuesto'
          />
        </div>

        <input type="submit" value='Agregar' />
      </form>
    </div>
  )
}

export default NewBudget
