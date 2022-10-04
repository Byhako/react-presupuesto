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

  const handleInput = e => {
    if (Number(e.target.value) || e.target.value === '0') {
      setBudget(Number(e.target.value))
    } else if (e.target.value === '') {
      setBudget('')
    } else {
      if (Number(budget)) setBudget(budget)
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
            onChange={handleInput}
          />
        </div>

        <input type="submit" value='Agregar' />

        {message && (<Message type='error'>{message}</Message>)}
      </form>
    </div>
  )
}

export default NewBudget
