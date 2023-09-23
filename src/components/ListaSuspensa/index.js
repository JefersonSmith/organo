import './styles.css'

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)} {/*map é um laço de repetição, para cada item retorna uma option}*/}
            </select>
        </div>
    )
}

export default ListaSuspensa;