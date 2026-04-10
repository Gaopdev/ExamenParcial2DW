import "./search.css"

interface Props {
    alEscribir: (valor: string) => void
    alEscoger: (valor: string) => void
}

function Search({ alEscribir, alEscoger }: Props) {
    return (
        <>
        <div className="container-inputs">
            <input type="text" placeholder="Buscar" className="search" onChange={(e) => alEscribir(e.target.value)}/>
            <select id="select-box" onChange={(e) => alEscoger(e.target.value)}>
                <option value="">Todos</option>
                <option value="intraining">In Training</option>
                <option value="rookie">Rookie</option>
                <option value="champion">Champion</option>
                <option value="ultimate">Ultimate</option>
                <option value="mega">Mega</option>
            </select>
        </div>
        </>
    )
}

export default Search