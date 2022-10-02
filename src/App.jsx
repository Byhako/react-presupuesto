import { useState } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'

import { generateId } from './helpers'

import IconNewSpent from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [validBudget, setValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [spents, setSpents] = useState([])

  const handleNewWSpent = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 600);
  }

  const saveSpent = spent => {
    spent.id = generateId()
    setSpents([...spents, spent])
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
      />

      {validBudget && (
        <div className="nuevo-gasto">
          <img
            src={IconNewSpent}
            alt='new-spent'
            onClick={handleNewWSpent}
          />
        </div>
      )}

      {modal && <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveSpent={saveSpent}
        />
      }
    </div>
  )
}

export default App
