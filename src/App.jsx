import { useState, useEffect } from 'react'

import Header from './components/Header'
import Modal from './components/Modal'
import ListSpents from './components/ListSpents'

import { generateId } from './helpers'

import IconNewSpent from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(Number(localStorage.getItem('budgetReact')) ?? 0)
  const [validBudget, setValidBudget] = useState(localStorage.getItem('budgetReact') ? true : false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [spents, setSpents] = useState(localStorage.getItem('spentsReact') ?
    JSON.parse(localStorage.getItem('spentsReact')) : []
  )
  const [editSpent, setEditSpent] = useState({})

  useEffect(() => {
    if (editSpent.nombre) handleNewWSpent()
  }, [editSpent])

  useEffect(() => {
    localStorage.setItem('budgetReact', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('spentsReact', JSON.stringify(spents) ?? [])
  }, [spents])

  const handleNewWSpent = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }

  const saveSpent = spent => {
    if (spent.id) {
      const newSpents = spents.map(stateSpent =>
        stateSpent.id === spent.id ? spent : stateSpent
      )
      setSpents(newSpents)
    } else {
      spent.id = generateId()
      spent.date = Date.now()
      setSpents([...spents, spent])
    }
  }

  const handleDelete = (id) => {
    const newSpents = spents.filter(spent => spent.id !== id)
    setSpents(newSpents)
  }


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        spents={spents}
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget}
      />

      {validBudget && (
        <>
          <main>
            <ListSpents
              setEditSpent={setEditSpent}
              spents={spents}
              handleDelete={handleDelete}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewSpent}
              alt='new-spent'
              onClick={handleNewWSpent}
            />
          </div>
        </>
      )}

      {modal && <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveSpent={saveSpent}
        setEditSpent={setEditSpent}
        editSpent={editSpent}
        />
      }
    </div>
  )
}

export default App
