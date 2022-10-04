import { formatDate } from '../helpers'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'
import IconoGastos from '../img/icono_gastos.svg'

const dicIcons = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
  gastos: IconoGastos
}

const ListSpents = ({ spents, setEditSpent, handleDelete, filtro, gastosFiltrados }) => {
  
  const leadingActions = (spent) => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditSpent(spent)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = (id) => (
    <TrailingActions>
      <SwipeAction destructive onClick={() => handleDelete(id)}>
        Borrar
      </SwipeAction>
    </TrailingActions>
  )

  const Spent = ({spent}) => (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions(spent)}
        trailingActions={trailingActions(spent.id)}
      >
        <div className='gasto sombra'>
          <div className="contenido-gasto">
            <img  src={dicIcons[spent.category]} alt={spent.category} />
            <div className="descripcion-gasto">
              <p className="categoria">{spent.category}</p>
              <p className="nombre-gasto">{spent.nombre}</p>
              <p className="fecha-gasto">
                Agregado el: {' '}
                <span>{formatDate(spent.date)}</span>
              </p>
            </div>
          </div>

          <p className="cantidad-gasto">${spent.cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )

  return (
    <div className="listado-gastos contenedor">

      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos'}</h2>
          {gastosFiltrados.map(spent => (
            <Spent key={spent.id} spent={spent} />
          ))}
        </>
      ) : (
        <>
          <h2>{spents.length ? 'Gastos' : 'No hay gastos'}</h2>
          {spents.map(spent => (
            <Spent key={spent.id} spent={spent} />
          ))}
        </>
      )}

    </div>
  )
}

export default ListSpents
