import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({ budget, setBudget, validBudget, setValidBudget }) => {

  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {validBudget ? (
        <ControlBudget
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
