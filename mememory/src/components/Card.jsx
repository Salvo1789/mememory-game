

function Card({card, onClick}) {
    return(
        <div 
        className={`memory-card${card.isFlipped ? " flip" : ""}`}
        onClick={onClick}
        style={{ order: card.order }}
        data-testid={card.id}
        >
        <img className="front-face" src={card.image} alt="Card" />
        <img className="back-face" src="https://img.wallpapic.it/i4926-333-617/thumb/blu-colorati-arte-digitale-sfondo.jpg" alt="JS Badge" />

        </div>
    )
}

export default Card;