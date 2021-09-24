import React, { useState } from "react";
import "../styles/pageStyles/game.css";
import logo from "../images/logo.png";
import { useLocation } from "react-router-dom";
import burak from "../images/burak.png";
import messi from "../images/messi.jpeg";
import players from "../store/initialValues/players";
import { GiTwoCoins } from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import RightAnswerModal from "../components/Modals/GameModals/RightAnswerModal";
import WrongAnswerModal from "../components/Modals/GameModals/WrongAnswerModal";
import {  useHistory } from "react-router-dom";

export default function Game() {
  const location = useLocation();

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer"></div>;
    }

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  const history = useHistory();

  const handleHistory = (state) => {

     history.push("/")
  }

  const [isRightAnswerModalVisible, setIsRightAnswerModalVisible] =
    useState(false);
    const [isWrongAnswerModalVisible, setIsWrongAnswerModalVisible] =
    useState(false);

  return (
    <div className="game-container">
      <div className="game-leftPart">
        <div className="game-leftPart-logoContainer">
          <div>
            <img src={logo} className="game-leftPart-logo" 
            alt="logo"
            onClick={()=>handleHistory()}
            />
          </div>
        </div>
        <div className="game-leftPart-infoContainer">
          <div className="game-leftPart-info">
            OYUN TÜRÜ: {location.state.gameType.toUpperCase()}
          </div>
          <div className="game-leftPart-info">
            LİG: {location.state.selectedLeague.toUpperCase()}
          </div>
        </div>
        <div className="game-leftPart-prizeInfoContainer">
          <div className="game-leftPart-prize">TOPLAM ÖDÜL</div>
          <div className="game-leftPart-totalPrize">
            {location.state.betAmount * location.state.numberOfPlayers}₺
          </div>
        </div>

        <div className="game-leftPart-playersContainer">
        
            <div className="game-leftPart-players-numberOfPlayers">
            {location.state.numberOfPlayers} OYUNCU
          </div>
          
          <div className="game-leftPart-playersContainer-players">
            {players.map((player) => (
              <div
                className="game-leftPart-playersContainer-player"
                key={player.playerId}
              >
                <div className="game-leftPart-playersContainer-playerImg-container">
                  <img
                    src={burak}
                    alt="user"
                    className="game-leftPart-playersContainer-playerImg"
                  />
                </div>
                <div className="game-leftPart-playersContainer-playerInfo-container">
                  <div className="game-leftPart-playersContainer-playerInfo">
                    {player.userFullName}
                  </div>
                  <div className="game-leftPart-playersContainer-playerInfo">
                    JOKER: {player.joker}
                  </div>
                </div>
                <div className="game-leftPart-playersContainer-coinInfo">
                  <GiTwoCoins color="gold" size="1.6em"></GiTwoCoins>
                  {player.remainingCoin}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="game-rightPart">
        <div className="game-rightPart-remainingTime-container">
          <div className="game-rightPart-remainingTime-text">KALAN SÜRE</div>
          <div className="game-rightPart-remainingTime-spinner">
            <div className="timer-wrapper">
              <CountdownCircleTimer
                isPlaying
                duration={15}
                colors={[["#E8DB2F"]]}
                onComplete={() => [true, 1000]}
                size={80}
              >
                {renderTime}
              </CountdownCircleTimer>
            </div>
          </div>
        </div>

        <div className="game-rightPart-questionImg-container">
          <img src={messi} className="game-rightPart-questionImg" alt="footballer" />
        </div>
        <div className="game-rightPart-questionInfo-container">
          <div className="game-rightPart-questionInfo">1. Soru</div>
          {location.state.gameType === "standart" ? (
            <div className="game-rightPart-questionInfo">
              {location.state.numberOfQuestions} Soru
            </div>
          ) : null}
        </div>
        <div className="game-rightPart-questionText">
          Resimde gösterilen futbolcunun adı nedir ?
        </div>
        <div className="game-rightPart-usingJoker-container">
          <div className="game-rightPart-usingJoker-info">
            <FaCrown
              color="white"
              size="2em"
              className="usingJoker-icon"
            ></FaCrown>
            <div className="game-rightPart-usingJoker-infoText">
              ÇİFT CEVAP HAKKI 1/3
            </div>
          </div>
          <button
            type="button"
            className="btn btn-warning btn-lg usingJoker-btn"
          >
            KULLAN
          </button>
        </div>

        <div className="game-rightPart-questionOptions">
          <div className="game-rightPart-questionOption"
          onClick={() => setIsWrongAnswerModalVisible(true)}
          >
            Cristiano Ronaldo</div>
          <div
            className="game-rightPart-questionOption"
            onClick={() => setIsRightAnswerModalVisible(true)}
          >
            Lionel Messi
          </div>
          <div className="game-rightPart-questionOption"
          onClick={() => setIsWrongAnswerModalVisible(true)}
          >
            Neymar Jr.
            </div>
          <div className="game-rightPart-questionOption"
          onClick={() => setIsWrongAnswerModalVisible(true)}
          >
            Kylian Mbappé
            </div>
        </div>
      </div>

      <RightAnswerModal
        isRightAnswerModalVisible={isRightAnswerModalVisible}
        cancel={() => {
          setIsRightAnswerModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsRightAnswerModalVisible(false)}
      />

      <WrongAnswerModal
        isWrongAnswerModalVisible={isWrongAnswerModalVisible}
        cancel={() => {
          setIsWrongAnswerModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsWrongAnswerModalVisible(false)}
      />
    </div>
  );
}
