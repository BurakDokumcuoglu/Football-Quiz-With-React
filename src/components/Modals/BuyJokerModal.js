import React from "react";
import Modal from "react-modal";
import "../../styles/ModalStyles/buyJokerModal.css";
import { FaCrown } from "react-icons/fa";

const buyJokerModalStyles = {
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
    width: "28vw",
    height: "68vh",
    border: "3px solid white",
    overflow: "hidden"
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 20,
  },
};

const BuyJokerModal = ({ cancel, isBuyJokerModalVisible }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isBuyJokerModalVisible}
      style={buyJokerModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="buyJokerModal-container">
        <div className="buyJokerModal-top">
          <div className="buyJokerModal-top-text">JOKER AL</div>
        </div>

        <div className="buyJokerModal-content">
          <div className="buyJokerModel-content-jokers">
            <div className="buyJokerModel-content-joker joker1">
              <div>
                <FaCrown
                  size="6em"
                  color="white"
                  className="buyJokerModal-jokericon"
                ></FaCrown>
                <div className="buyJokerModal-joker-toptext-container">
                  <div className="buyJokerModal-joker-toptext">Çift</div>
                  <div className="buyJokerModal-joker-toptext">Cevap</div>
                  <div className="buyJokerModal-joker-toptext">Hakkı</div>
                </div>
                <div className="buyJokerModal-joker-bottomtext-container">
                  <div>5 Adet</div>
                  <div>50₺</div>
                </div>
              </div>
            </div>
            <div className="buyJokerModel-content-joker joker2">
              <div>
                <FaCrown
                  size="6em"
                  color="white"
                  className="buyJokerModal-jokericon"
                ></FaCrown>
                <div className="buyJokerModal-joker-toptext-container">
                  <div className="buyJokerModal-joker-toptext">Çift</div>
                  <div className="buyJokerModal-joker-toptext">Cevap</div>
                  <div className="buyJokerModal-joker-toptext">Hakkı</div>
                </div>
                <div className="buyJokerModal-joker-bottomtext-container">
                  <div>10 Adet</div>
                  <div>90₺</div>
                </div>
              </div>
            </div>
          </div>
          <div className="buyJokerModel-content-buttons">
          <button type="button" className="btn btn-warning btn-lg buyJokerModal-btn buyJokerModal-btn1">SATIN AL</button>
          <button type="button" className="btn btn-warning btn-lg buyJokerModal-btn buyJokerModal-btn2">SATIN AL</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default BuyJokerModal;
