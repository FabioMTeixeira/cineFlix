import './style.css';

function Card({ titulo, fundo }) {
    return (
        <div
            className='container-card'
            style={{ backgroundImage: `url(${fundo})` }}
        >
            <div className='container-title'>
                <h1>{titulo}</h1>
            </div>
        </div>
    );
}

export default Card;