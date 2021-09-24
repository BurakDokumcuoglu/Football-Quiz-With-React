import React from "react";
import Modal from "react-modal";
import "../../styles/ModalStyles/historyModal.css";
import history from "../../store/initialValues/history";

const historyModalStyles = {
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
    width: "70vw",
    height: "68vh",
    border: "3px solid white",
    overflow: "hidden"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 20,
  },
};

const HistoryModal = ({ cancel, isHistoryModalVisible }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isHistoryModalVisible}
      style={historyModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="historyModal-container">
        <div className="historyModal-top">
          <div className="historyModal-top-text">GEÇMİŞ</div>
        </div>
        <div className="historyModal-content">
          <div className="historyModal-content-titles">
            <div>Tarih Saat</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LİG</div>
            <div>&nbsp;&nbsp;&nbsp;OYUNCU SAYISI</div>
            <div>&nbsp;&nbsp;&nbsp;TÜRÜ</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SORU SAYISI</div>
            <div>BAHİS</div>
            <div>&nbsp;&nbsp;KAZANÇ</div>
          </div>
          <div className="historyModal-content-games">
            {history.map((game) => (
              <div className="historyModal-content-game" key={game.historyId}>
                <div>{game.dateAndTime}</div>
                <div>{game.league}</div>
                <div>{game.numberOfPlayers}/10</div>
                <div>{game.gameType}</div>
                <div>{game.numberOfQuestions}</div>
                <div>{game.bet}₺</div>
                <div>{game.earning}₺</div>
              </div>
            ))}
          </div>
          <div className="rulesModal-content-button">
            <button type="button" className="btn btn-warning btn-lg historyModalbtn" onClick={cancel}>KAPAT</button>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default HistoryModal;
