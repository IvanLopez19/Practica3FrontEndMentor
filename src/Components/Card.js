import '../Estilos/style.css';

function Card(props){
    return(
        <div className='card'>
            <h2 className='title'>{props.title}</h2>
            <p className='text'>{props.text}</p>
        </div>
    );
}

export default Card;