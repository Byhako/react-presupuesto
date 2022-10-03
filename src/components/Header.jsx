import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({ budget, setBudget, validBudget, setValidBudget, spents, setEditSpent }) => {

  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {validBudget ? (
        <ControlBudget
          setEditSpent={setEditSpent}
          spents={spents}
          budget={budget}
          setBudget={setBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setValidBudget={setValidBudget}
        />
      )}

    </header>
  )
}

export default Header
