import React from "react";
import Modal from "react-modal";
import "../../../styles/ModalStyles/StartGameModalModalsStyles/betAmountModal.css";

const betAmountModalStyles = {
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

const BetAmountModal = ({ cancel, isBetAmountModalVisible, setBetAmount }) => {

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isBetAmountModalVisible}
      style={betAmountModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="betAmountModal-container">
        <div className="betAmountModal-top">
          <span className="betAmountModal-top-text">BAHİS TUTARI</span>
        </div>

        <div className="betAmountModal-content">
          <input
            className="form-control betAmountModal-input"
            type="text"
            aria-label="default input example"
             onChange={e => setBetAmount(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-warning btn-lg betAmountModal-okbtn"
            onClick={cancel}
          >
            TAMAM
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BetAmountModal;
