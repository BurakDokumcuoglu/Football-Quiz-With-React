import React, { useState } from "react";
import Modal from "react-modal";
import "../../styles/ModalStyles/startGameModal.css";
import { BiChevronDown } from "react-icons/bi";
import ChooseLeagueModal from "./StartGameModalModals/ChooseLeagueModal";
import BetAmountModal from "./StartGameModalModals/BetAmountModal";
import NumberOfPlayersModal from "./StartGameModalModals/NumberOfPlayersModal";
import NumberOfQuestionsModal from "./StartGameModalModals/NumberOfQuestionsModal";
import GamePasswordModal from "./StartGameModalModals/GamePasswordModal";
import {  useHistory } from "react-router-dom";

const startGameModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: "#075c55",
    borderRadius: 20,
    width: "30vw",
    height: "65vh",
    border: "3px solid white",
    overflow: "hidden"
    
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 20,
  },
};

const StartGameModal = ({ cancel, isStartGameModalVisible }) => {
  const [gameType, setGameType] = useState("standart");


  const [isChooseLeagueModalVisible, setIsChooseLeagueModalVisible] =
    useState(false);
  const [isBetAmountModalVisible, setIsBetAmountModalVisible] = useState(false);
  const [isNumberOfPlayersModalVisible, setIsNumberOfPlayersModalVisible] =
    useState(false);
  const [isNumberOfQuestionsModalVisible, setIsNumberOfQuestionsModalVisible] =
    useState(false);
  const [isGamePasswordModalVisible, setIsGamePasswordModalVisible] =
    useState(false);


  const [selectedLeague, setSelectedLeague] = useState("LİG SEÇ");
  const [betAmount, setBetAmount] = useState("BAHİS TUTARI");
  const [numberOfPlayers, setNumberOfPlayers] = useState("KİŞİ SAYISI")
  const [numberOfQuestions, setNumberOfQuestions] = useState("SORU SAYISI")
  const [password, setPassword] = useState("ŞİFRE")


  const selectLeague = (val) => {
    setSelectedLeague(val);
  };

  const betAmountValue = (val) => {
    setBetAmount(val);
  };

  const numberOfPlayersValue = (val) => {
    setNumberOfPlayers(val)
  }

  const numberOfQuestionsValue = (val) => {
    setNumberOfQuestions(val)
  }

  const passwordValue = (val) => {
    setPassword(val)
  }


  const history = useHistory();

  const handleHistory = (state) => {

     history.push({pathname:"/game",state:state})
  }
  const state = {
    gameType:gameType,
    selectedLeague:selectedLeague,
    betAmount:betAmount,
    numberOfPlayers:numberOfPlayers,
    numberOfQuestions:numberOfQuestions
  }

  return (
    
    <Modal
      ariaHideApp={false}
      isOpen={isStartGameModalVisible}
      style={startGameModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="startGameModal-container">
        <div className="startGameModal-top">
          <div className="startGameModal-top-text">OYUN AÇ</div>
        </div>
        <div className="startGameModal-content">
          {gameType === "standart" ? (
            <div className="startGameModal-content-gameTypeButtons">
              <button
                type="button"
                className="btn btn-warning btn-lg startGameModal-content-gameTypeButton startGameModal-content-gameTypeButton-active"
                onClick={() => setGameType("standart")}
              >
                STANDART
              </button>
              <button
                type="button"
                className="btn btn-warning btn-lg startGameModal-content-gameTypeButton"
                onClick={() => setGameType("elemeli")}
              >
                ELEMELİ
              </button>
            </div>
          ) : (
            <div className="startGameModal-content-gameTypeButtons">
              <button
                type="button"
                className="btn btn-warning btn-lg startGameModal-content-gameTypeButton"
                onClick={() => setGameType("standart")}
              >
                STANDART
              </button>
              <button
                type="button"
                className="btn btn-warning btn-lg startGameModal-content-gameTypeButton startGameModal-content-gameTypeButton-active"
                onClick={() => setGameType("elemeli")}
              >
                ELEMELİ
              </button>
            </div>
          )}

          {gameType === "standart" ? (
            <div className="startGameModal-content-gameTypeOptions">
              <div
                className="startGameModal-content-gameTypeOption"
                onClick={() => setIsChooseLeagueModalVisible(true)}
              >
                {selectedLeague}
                <BiChevronDown
                  className="startGameModal-icon"
                  color="white"
                  size="2em"
                ></BiChevronDown>
              </div>
              <div
                className="startGameModal-content-gameTypeOption"
                onClick={() => setIsBetAmountModalVisible(true)}
              >
                {betAmount} ₺
                <BiChevronDown
                  className="startGameModal-icon"
                  color="white"
                  size="2em"
                ></BiChevronDown>
              </div>
              <div
                className="startGameModal-content-gameTypeOption"
                onClick={() => setIsNumberOfPlayersModalVisible(true)}
              >
                  {numberOfPlayers==="KİŞİ SAYISI"?numberOfPlayers:numberOfPlayers +" KİŞİ"}
                <BiChevronDown
                  className="startGameModal-icon"
                  color="white"
                  size="2em"
                ></BiChevronDown>
              </div>
              <div
                className="startGameModal-content-gameTypeOption"
                onClick={() => setIsNumberOfQuestionsModalVisible(true)}
              >
                {numberOfQuestions==="SORU SAYISI"?numberOfQuestions:numberOfQuestions+" SORU"}
                <BiChevronDown
                  className="startGameModal-icon"
                  color="white"
                  size="2em"
                ></BiChevronDown>
              </div>
              <div
                className="startGameModal-content-gameTypeOption"
                onClick={() => setIsGamePasswordModalVisible(true)}
              >
                {password.length<1 || password==="ŞİFRE" ?  "ŞİFRESİZ OYUN":password}
                <BiChevronDown
                  className="startGameModal-icon"
                  color="white"
                  size="2em"
                ></BiChevronDown>
              </div>
            </div>
          ) : (
            <div className="startGameModal-content-gameTypeOptions">
              <div
                className="startGameModal-content-gameTypeOption"
                onClick={() => setIsChooseLeagueModalVisible(true)}
              >
                {selectedLeague}
                <BiChevronDown
                  className="startGameModal-icon"
                  color="white"
                  size="2em"
                ></BiChevronDown>
              </div>
              <div
                className="startGameModal-content-gameTypeOption"
                onClick={() => setIsBetAmountModalVisible(true)}
              >
                {betAmount} ₺
                <BiChevronDown
                  className="startGameModal-icon"
                  color="white"
                  size="2em"
                ></BiChevronDown>
              </div>
              <div
                className="startGameModal-content-gameTypeOption"
                onClick={() => setIsNumberOfPlayersModalVisible(true)}
              >
                {numberOfPlayers==="KİŞİ SAYISI"?numberOfPlayers:numberOfPlayers +" KİŞİ"} 
                <BiChevronDown
                  className="startGameModal-icon"
                  color="white"
                  size="2em"
                ></BiChevronDown>
              </div>
              <div
                className="startGameModal-content-gameTypeOption"
                onClick={() => setIsGamePasswordModalVisible(true)}
              >
                {password.length<1 || password==="ŞİFRE" ? "ŞİFRESİZ OYUN":password}
                <BiChevronDown
                  className="startGameModal-icon"
                  color="white"
                  size="2em"
                ></BiChevronDown>
              </div>
            </div>
          )}
          <div className="startGameModal-button-container">
            <button
              type="button"
              className="btn btn-warning btn-lg startGameModal-button"
              onClick={()=>handleHistory(state)}
            >
              MASA OLUŞTUR
            </button>
          </div>
        </div>
      </div>

      <ChooseLeagueModal
        isChooseLeagueModalVisible={isChooseLeagueModalVisible}
        cancel={() => {
          setIsChooseLeagueModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsChooseLeagueModalVisible(false)}
        setSelectedLeague={selectLeague}
      />

      <BetAmountModal
        isBetAmountModalVisible={isBetAmountModalVisible}
        cancel={() => {
          setIsBetAmountModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsBetAmountModalVisible(false)}
        setBetAmount={betAmountValue}
      />

      <NumberOfPlayersModal
        isNumberOfPlayersModalVisible={isNumberOfPlayersModalVisible}
        cancel={() => {
          setIsNumberOfPlayersModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsNumberOfPlayersModalVisible(false)}
        setNumberOfPlayers={numberOfPlayersValue}
      />

      <NumberOfQuestionsModal
        isNumberOfQuestionsModalVisible={isNumberOfQuestionsModalVisible}
        cancel={() => {
          setIsNumberOfQuestionsModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsNumberOfQuestionsModalVisible(false)}
        setNumberOfQuestions={numberOfQuestionsValue}
      />

      <GamePasswordModal
        isGamePasswordModalVisible={isGamePasswordModalVisible}
        cancel={() => {
          setIsGamePasswordModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsGamePasswordModalVisible(false)}
        setGamePassword = {passwordValue} 
      />

    </Modal>      

  );
};

export default StartGameModal;
