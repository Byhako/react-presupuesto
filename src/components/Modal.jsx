import { useState, useEffect } from 'react'
import Message from './Message'

import Cerrar from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setAnimateModal, saveSpent, editSpent, setEditSpent }) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [category, setCategory] = useState('')
  const [id, setId] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (editSpent.nombre) {
      setNombre(editSpent.nombre)
      setCantidad(editSpent.cantidad)
      setCategory(editSpent.category)
      setId(editSpent.id)
    }
  }, [])


  const hiddenModal = () => {
    setAnimateModal(false)
    setTimeout(() => {
      setEditSpent({})
      setModal(false)
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault()
    
    if([nombre, cantidad, category].includes('')) {
      setMessage('Todos los campos son obligatorios.')
      setTimeout(() => {
        setMessage('')
      }, 3000);
    } else {
      saveSpent({ nombre, cantidad, category, id, date: editSpent.date })
      hiddenModal()
    }
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

      <form onSubmit={handleSubmit} className={`formulario ${animateModal ? 'animar' : 'cerrar' }`}>
        <legend>{editSpent.nombre ? 'Editar ' : 'Nuevo '} Gasto</legend>

        <div className='campo'>
          <label htmlFor='nombre'>Nombre del gasto</label>
          <input
            id='nombre'
            type='text'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder='Agrega el nombre del gasto'
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad del gasto</label>
          <input
            id='cantidad'
            type='number'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
            placeholder='Agrega la cantidad del gasto'
          />
        </div>

        <div className='campo'>
          <label htmlFor='category'>Cantegoría</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">-- Selecciona --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">suscripciones</option>
          </select>
        </div>

        <input type="submit" value={`${editSpent.nombre ? 'Guardar Cambios' : 'Agregar Gasto'}`} />
        {message && (<Message type='error'>{message}</Message>)}
      </form>
    </div>
  )
}

export default Modal
