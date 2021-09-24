import React from "react";
import Modal from "react-modal";
import "../../styles/ModalStyles/minBetModal.css";

const minBetModalStyles = {
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

const MinBetModal = ({ cancel, isMinBetModalVisible, setMinBetValue }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isMinBetModalVisible}
      style={minBetModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="minBetModal-container">
        <div className="minBetModal-top">
          <span className="minBetModal-top-text">MİNİMUM BAHİS MİKTARI</span>
        </div>

        <div className="minBetModal-content">
          <input
            className="form-control minBetModal-input"
            type="text"
            aria-label="default input example"
            onChange={e => setMinBetValue(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-warning btn-lg minBetModal-okbtn"
            onClick={cancel}
          >
            TAMAM
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MinBetModal;
