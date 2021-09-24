import React from "react";
import "../styles/games.css";
import { useSelector } from "react-redux";
import { AiFillLock } from "react-icons/ai";

export default function Games() {
  
  const {games} = useSelector(state => state.games)

  return (
    <div className="games">
      {games.map((game) => (
        <div className="game" key={game.gameId}>
          <span className="game-text">{game.gameId}</span>
          <span className="game-text">{game.gameStarter}</span>
          <span className="game-text">{game.league}</span>
          <span className="game-text">{game.numberOfPlayers}/10</span>
          <span className="game-text">{game.gameType}</span>
          <span className="game-text">{game.numberOfQuestions}</span>
          <span className="game-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{game.bet}₺</span>
          <span className="game-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<AiFillLock size="1.2em" className="lock-icon"></AiFillLock>}</span>
          <span className="game-text">{game.isGameFull?<button type="button" className="btn btn-danger games-btn">DOLU</button>
          :<button type="button" className="btn btn-warning games-btn">OTUR</button>}</span>
        </div>
      ))}
    </div>
  );
}
