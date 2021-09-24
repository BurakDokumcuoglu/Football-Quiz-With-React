import React from "react";
import Modal from "react-modal";
import "../../styles/ModalStyles/maxBetModal.css";

const maxBetModalStyles = {
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

const MaxBetModal = ({ cancel, isMaxBetModalVisible, setMaxBetValue }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isMaxBetModalVisible}
      style={maxBetModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="maxBetModal-container">
        <div className="maxBetModal-top">
          <span className="maxBetModal-top-text">MAKSİMUMM BAHİS MİKTARI</span>
        </div>

        <div className="maxBetModal-content">
          <input
            className="form-control maxBetModal-input"
            type="text"
            aria-label="default input example"
            onChange = {e => setMaxBetValue(e.target.value)} 
          />
          <button
            type="button"
            className="btn btn-warning btn-lg maxBetModal-okbtn"
            onClick={cancel}
          >
            TAMAM
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MaxBetModal;
