import { useState } from 'react'
import Message from './Message'


const NewBudget = ({ budget, setBudget }) => {
  const [message, setMessage] = useState('')

  const handleBudget = e => {
    e.preventDefault()
    
    if (Number(budget) && Number(budget) > 0) {
      setMessage('')

    } else {
      setMessage('No es un presupuesto válido.')
    }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handleBudget} className='formulario'>
        <div className="campo">
          <label htmlFor="nuevo-presupuesto">Definir Presupuesto</label>
          <input
            type="text"
            className='nuevo-presupuesto'
            placeholder='Agrega tu presupuesto'
            id='nuevo-presupuesto'
            value={budget}
            onChange={e => setBudget(e.target.value)}
          />
        </div>

        <input type="submit" value='Agregar' />

        {message && (<Message type='error'>{message}</Message>)}
      </form>
    </div>
  )
}

export default NewBudget
