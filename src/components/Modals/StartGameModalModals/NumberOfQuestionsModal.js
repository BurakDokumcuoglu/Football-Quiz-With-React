import React from "react";
import Modal from "react-modal";
import "../../../styles/ModalStyles/StartGameModalModalsStyles/numberOfPlayerModal.css";

const numberOfQuestionsModalStyles = {
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

  const NumberOfQuestionsModal = ({ cancel, isNumberOfQuestionsModalVisible, setNumberOfQuestions }) => {
    return (
      <Modal
        ariaHideApp={false}
        isOpen={isNumberOfQuestionsModalVisible}
        style={numberOfQuestionsModalStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={cancel}
      >
        <div className="numberOfQuestionsModal-container">
          <div className="numberOfQuestionsModal-top">
            <span className="numberOfQuestionsModal-top-text">SORU SAYISI</span>
          </div>
  
          <div className="numberOfQuestionsModal-content">
            <input
              className="form-control numberOfQuestionsModal-input"
              type="text"
              aria-label="default input example"
              onChange={e => setNumberOfQuestions(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-warning btn-lg numberOfQuestionsModal-okbtn"
              onClick={cancel}
            >
              TAMAM
            </button>
          </div>
        </div>
      </Modal>
    );
  };
  
  export default NumberOfQuestionsModal;
  