import React, { useState } from "react";
import { cardsData } from "../cards";
import Card from "./Card";


function Game() {
    //Cards State
    let [cardsState, setCardsState] = useState(cardsData);
    //First Card info
    let [firstCard, setFirstCard] = useState(null);
    // Is it first click
    let [secondClick, setSecondClick] = useState(false);
    // set flag to wait for 1500ms
    let [wait, setWait] = useState(false);

    const handleClick = async(e, clickedCard) => {
        if (wait){
            return;
        }
        if(!secondClick){
            await setFirstCard(clickedCard);
            await setSecondClick(true);
            changeCardStatusHandler(clickedCard);
        }else{
            await setSecondClick(false);
            changeCardStatusHandler(clickedCard);
            checker(clickedCard);
            setFirstCard(null);
        }
    }

    const checker = async (card) => {
        if (card.name === firstCard.name) {
          console.log("hellooo");
          card["passed"] = true;
          firstCard["passed"] = true;
          changeCardStatusHandler(card);
          changeCardStatusHandler(firstCard);
        } else {
          setWait(true);
          setTimeout(() => {
            changeCardStatusHandler(card);
            changeCardStatusHandler(firstCard);
            setWait(false);
          }, 1500);
        }
      };
    
      const changeCardStatusHandler = async (clickedCard) => {
        if (!clickedCard.passed) clickedCard.isFlipped = !clickedCard.isFlipped;
        let index = cardsState.findIndex((card) => card.id === clickedCard.id);
        let newState = [...cardsState];
        newState.splice(index, 1, clickedCard);
        await setCardsState(newState);
      };


    return (
      <>
      <h1 className="font-face-gm"><span id="meme">MEME</span>MORY</h1>
        <section className="memory-game">
            {cardsState.map((card) => {
              return(
                <Card 
                    key={card.id}
                    card={card}
                    onClick={(e) => handleClick(e,card)}
                />
            )})}
        </section>
        </>
    )
}

export default Game;