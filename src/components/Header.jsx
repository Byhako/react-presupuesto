import NewBudget from './NewBudget'
import ControlBudget from './ControlBudget'

const Header = ({
    budget,
    setBudget,
    validBudget,
    setValidBudget,
    spents,
    setSpents
  }) => {

  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {validBudget ? (
        <ControlBudget
          spents={spents}
          setSpents={setSpents}
          budget={budget}
          setBudget={setBudget}
          setValidBudget={setValidBudget}
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
