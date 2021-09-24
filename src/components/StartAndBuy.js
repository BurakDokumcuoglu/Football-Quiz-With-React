import React, { useState } from "react";
import "..//styles/startAndBuy.css";
import joker from "../images/joker.png";
import oyun from "../images/oyun.png";
import BuyJokerModal from "./Modals/BuyJokerModal";
import StartGameModal from "./Modals/StartGameModal";

export default function StartAndBuy() {
  const [isBuyJokerModalVisible, setIsBuyJokerModalVisible] = useState(false);
  const [isStartGameModalVisible, setIsStartGameModalVisible] = useState(false);

  return (
    <div className="startAndBuyContainer">
      <div className="start">
        <img className="startAndBuyImg" src={oyun} alt="oyun"
        onClick={ () => setIsStartGameModalVisible(true)}
        />
      </div>

      <div className="buy">
        <img
          className="startAndBuyImg"
          src={joker}
          alt="joker"
          onClick={() => setIsBuyJokerModalVisible(true)}
        />
      </div>

      <BuyJokerModal
        isBuyJokerModalVisible={isBuyJokerModalVisible}
        cancel={() => {
          setIsBuyJokerModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsBuyJokerModalVisible(false)}
      />

      <StartGameModal
        isStartGameModalVisible={isStartGameModalVisible}
        cancel={() => {
          setIsStartGameModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsStartGameModalVisible(false)}
      />
    </div>
  );
}
