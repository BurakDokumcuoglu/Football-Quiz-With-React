import React from "react";
import Modal from "react-modal";
import "../../../styles/ModalStyles/GameModalStyles/rightAnswerModal.css"
import { FaRegThumbsUp } from "react-icons/fa";

const rightAnswerModalStyles = {
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
      height: "45vh",
      border:"2px solid white"
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 20,
    },
  };

  const RightAnswerModal = ({ cancel, isRightAnswerModalVisible}) => {
    return (
      <Modal
        ariaHideApp={false}
        isOpen={isRightAnswerModalVisible}
        style={rightAnswerModalStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={cancel}
      >
        <div className="rightAnswerModal-container">
  
         <div className="rightAnswerModal-topInfo">DOĞRU YANIT</div>
         <div><FaRegThumbsUp color="white" size="5em" className="rightAnswerModal-trueIcon"></FaRegThumbsUp></div> 
         <div className="rightAnswerModal-midInfo">KALAN OYUNCU</div>
         <div className="rightAnswerModal-remainingPlayers">4/5</div>
         <button type="button" className="btn btn-warning btn-lg rightAnswerModal-okBtn"
         onClick={cancel}>
             TAMAM
             </button>

        </div>
  
      </Modal>
    );
  };
  
  export default RightAnswerModal;
  