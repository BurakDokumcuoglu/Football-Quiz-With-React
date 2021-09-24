import React from "react";
import Modal from "react-modal";
import "../../styles/ModalStyles/rulesModal.css";

const rulesModalStyles = {
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

const RulesModal = ({ cancel, isRulesModalVisible }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isRulesModalVisible}
      style={rulesModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="rulesModal-container">
        <div className="rulesModal-top">
          <div className="rulesModal-top-text">KURALLAR</div>
        </div>
        <div className="rulesModal-content">
            <div className="rulesModal-content-info">
                Football Fan Quiz Nedir? <br/>
                <p>Online oyuncuların birbirine ve sisteme karşı yarışabilecekleri, eğlenceli bir futbol yarışmasıdır. Yarışmacılar, oyun esnasında belirli süre içerisinde doğru cevabı vererek ilerler.</p><br/>
                Nasıl Oynanır?<br/>
                Football Fan Quiz'de üç farklı oyun türü vardır : "Standart", "Elemeli" ve "Tek Kişilik".<br/><br/>
                Oyuncu isterse "Tek Kişilik" büyük ödüllü oyuna bahis tutarını anında ödeyerek katılabilir. Tek kişilik oyundaki tüm soruları bilerek büyük ödülü kazanır. Standart ve Elemeli oyunlarda; oyun türü ve bahis miktarı oyunu açan kişi tarafından belirlenir. Oyunlarda oyuncular belirlenen sürelerde doğru cevabı vererek bir sonraki soruya geçerler. Yanlış cevap veren oyuncular ise elenir ve yatırdıkları bahis tutarını kaybederler. Elemeli oyun türünde soru sınırı yoktur. Oyuncular sorulara doğru cevap vererek ilerler. Oyunda son iki oyuncu kaldığında, her iki oyuncu da yanlış cevabı seçerse oyun sonra erer ve ödül ikiye bölünür. Her iki oyuncu da doğru cevabı verdiğinde yarışma devam eder. Standart oyun türünde soru adedi oyunu açan oyuncu tarafından belirlenir. Son soruya gelindiğinde, doğru cevabı seçen oyuncular arasında ödül bölünür.

            </div>
            <div className="rulesModal-content-button">
            <button type="button" className="btn btn-warning btn-lg rulesModalbtn" onClick={cancel}>KAPAT</button>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default RulesModal;
