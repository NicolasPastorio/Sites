import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
  const css = [
    { backgroundColor: props.corSecundaria },
    { borderColor: props.corPrimaria},]
  return (
    (props.colaboradores.length > 0) ? <section className="time" style={css[0]}>
      <h3 style={css[1]}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map( colaborador => <Colaborador
          corDeFundo={props.corPrimaria}
          key={colaborador.nome}
          nome={colaborador.nome}
          cargo={colaborador.cargo}
          imagem={colaborador.imagem}
        />)}
      </div>
    </section>
    : ''
  )
}

export default Time
