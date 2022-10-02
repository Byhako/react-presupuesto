import { formatDate } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'
import IconoGastos from '../img/icono_gastos.svg'

const dicIcons = {
  ahorro: IconoAhorro,
  casa: IconoCasa,
  comida: IconoComida,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
  gastos: IconoGastos
}

const ListSpents = ({ spents }) => {

  return (
    <div className="listado-gastos contenedor">
      <h2>{spents.length ? 'Gastos' : 'No hay gastos'}</h2>

      {spents.map(spent => (
        <div key={spent.id} className='gasto sombra'>
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
      ))}
    </div>
  )
}

export default ListSpents
