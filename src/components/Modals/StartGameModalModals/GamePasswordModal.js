import React from "react";
import Modal from "react-modal";
import "../../../styles/ModalStyles/StartGameModalModalsStyles/gamePasswordModal.css";

const gamePasswordModalStyles = {
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

  const GamePasswordModal = ({ cancel, isGamePasswordModalVisible, setGamePassword }) => {
    return (
      <Modal
        ariaHideApp={false}
        isOpen={isGamePasswordModalVisible}
        style={gamePasswordModalStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={cancel}
      >
        <div className="gamePasswordModal-container">
          <div className="gamePasswordModal-top">
            <span className="gamePasswordModal-top-text">ŞİFRE</span>
          </div>
  
          <div className="gamePasswordModal-content">
            <input
              className="form-control gamePasswordModal-input"
              type="text"
              aria-label="default input example"
              onChange={e => setGamePassword(e.target.value)}
            />
            <div className="gamePasswordModal-passwordInfo">
                HERKESE AÇIK OLMASI İÇİN BOŞ BIRAKINIZ
            </div>
            <button
              type="button"
              className="btn btn-warning btn-lg gamePasswordModal-okbtn"
              onClick={cancel}
            >
              TAMAM
            </button>
          </div>
        </div>
      </Modal>
    );
  };
  
  export default GamePasswordModal;
  