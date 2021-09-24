import React, { useState } from "react";
import "../styles/historyAndRules.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImWarning } from "react-icons/im";
import RulesModal from "./Modals/RulesModal";
import HistoryModal from "./Modals/HistoryModal";

export default function HistoryAndRules() {
  const [isRulesModalVisible, setIsRulesModalVisible] = useState(false);
  const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false);

  return (
    <div className="historyAndRulesContainer">
      <div className="history" onClick={ () => setIsHistoryModalVisible(true)}>
        <GiHamburgerMenu color="white" size="2.7vh"></GiHamburgerMenu>
        <span className="historyAndRulesText">GEÇMİŞ</span>
      </div>

      <div className="rules" onClick={ () => setIsRulesModalVisible(true)}>
        <ImWarning color="white" size="2.7vh"></ImWarning>
        <span className="historyAndRulesText">KURALLAR</span>
      </div>

      <RulesModal
        isRulesModalVisible={isRulesModalVisible}
        cancel={() => {
          setIsRulesModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsRulesModalVisible(false)}
      />

      <HistoryModal
        isHistoryModalVisible={isHistoryModalVisible}
        cancel={() => {
          setIsHistoryModalVisible(false);
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsHistoryModalVisible(false)}
      />
    </div>
  );
}
