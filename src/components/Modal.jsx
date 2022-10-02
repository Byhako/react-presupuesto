import Cerrar from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setAnimateModal }) => {

  const hiddenModal = () => {
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 600);
  }
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img
          src={Cerrar}
          alt='close'
          onClick={hiddenModal}
        />
      </div>

      <form className={`formulario ${animateModal ? 'animar' : 'cerrar' }`}>
        <legend>Nuevo Gasto</legend>

        <div className='campo'>
          <label htmlFor='nombre'>Nombre del gasto</label>
          <input
            type='text'
            placeholder='Agrega el nombre del gasto'
            id='nombre'
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad del gasto</label>
          <input
            type='number'
            placeholder='Agrega la cantidad del gasto'
            id='cantidad'
          />
        </div>

        <div className='campo'>
          <label htmlFor='category'>Cantegoría</label>
          <select name="category" id="category">
            <option value="selecciona">-- Selecciona --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="varios">Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">suscripciones</option>
          </select>
        </div>

        <input type="submit" value='Agregar Gasto' />
      </form>
    </div>
  )
}

export default Modal
