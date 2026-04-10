import "./Card.css"

interface Props{
    nombre:string,
    imagen:string,
    nivel:string
}

function Card({imagen,nombre,nivel}:Props){
    return(
        <>
        <div>
            <img src={imagen} alt="" />
            <h3>{nombre}</h3>
            <p>{nivel}</p>
        </div>
        </>
    )
}

export default Card