import './styles.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)} {/*map é um laço de repetição, para cada item retorna uma option}*/}
            </select>
        </div>
    )
}

export default ListaSuspensa;