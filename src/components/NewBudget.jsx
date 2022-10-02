import { useState } from 'react'
import Message from './Message'


const NewBudget = ({ budget, setBudget, setValidBudget }) => {
  const [message, setMessage] = useState('')

  const handleBudget = e => {
    e.preventDefault()
    
    if (budget > 0) {
      setMessage('')
      setValidBudget(true)
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
            type="number"
            className='nuevo-presupuesto'
            placeholder='Agrega tu presupuesto'
            id='nuevo-presupuesto'
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />
        </div>

        <input type="submit" value='Agregar' />

        {message && (<Message type='error'>{message}</Message>)}
      </form>
    </div>
  )
}

export default NewBudget
