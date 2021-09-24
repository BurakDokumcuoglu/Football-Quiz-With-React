import React from "react";
import Modal from "react-modal";
import "../../../styles/ModalStyles/GameModalStyles/wrongAnswerModal.css";
import { ImCross } from "react-icons/im";

const wrongAnswerModalStyles = {
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
    backgroundColor: "#75ada6",
    borderRadius: 20,
    width: "21vw",
    height: "30vh",
    border: "2px solid white",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 20,
  },
};

const WrongAnswerModal = ({ cancel, isWrongAnswerModalVisible }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isWrongAnswerModalVisible}
      style={wrongAnswerModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="wrongAnswerModal-container">

            <div className="wrongAnswerModal-topInfo">YANLIŞ YANIT</div>
            <ImCross color="white" size="4em" className="wrongAnswerModal-icon"></ImCross>

        <button
          type="button"
          className="btn btn-warning btn-lg wrongAnswerModal-okBtn"
          onClick={cancel}
        >
          TAMAM
        </button>
      </div>
    </Modal>
  );
};

export default WrongAnswerModal;
