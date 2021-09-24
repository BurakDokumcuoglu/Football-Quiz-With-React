import React from "react";
import Modal from "react-modal";
import "../../../styles/ModalStyles/StartGameModalModalsStyles/numberOfQuestionsModal.css";

const numberOfPlayersModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 30,
      paddingBottom: 30,
      backgroundColor: "#075c55",
      borderRadius: 20,
      width: "20vw",
      height: "25vh",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 20,
    },
  };

  const NumberOfPlayersModal = ({ cancel, isNumberOfPlayersModalVisible, setNumberOfPlayers }) => {
    return (
      <Modal
        ariaHideApp={false}
        isOpen={isNumberOfPlayersModalVisible}
        style={numberOfPlayersModalStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={cancel}
      >
        <div className="numberOfPlayersModal-container">
          <div className="numberOfPlayersModal-top">
            <span className="numberOfPlayersModal-top-text">KİŞİ SAYISI</span>
          </div>
  
          <div className="numberOfPlayersModal-content">
            <input
              className="form-control numberOfPlayersModal-input"
              type="text"
              aria-label="default input example"
              onChange={e => setNumberOfPlayers(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-warning btn-lg numberOfPlayersModal-okbtn"
              onClick={cancel}
            >
              TAMAM
            </button>
          </div>
        </div>
      </Modal>
    );
  };
  
  export default NumberOfPlayersModal;
  