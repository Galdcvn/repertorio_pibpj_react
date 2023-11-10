import "./style.css"

function Card (props) {

    return(
        <>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </>
    )
}

export default Card