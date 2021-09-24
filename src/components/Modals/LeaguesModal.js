import React from "react";
import Modal from "react-modal";
import "../../styles/ModalStyles/leaguesModal.css";
import { BiChevronDown } from "react-icons/bi";
import leagues from "../../store/initialValues/leagues";

const leaguesModalStyles = {
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
    height: "50vh",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 20,
  },
};

const LeaguesModal = ({ cancel, isLeaguesModalVisible, setLeague }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isLeaguesModalVisible}
      style={leaguesModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="leaguesModal-container">

        <div className="leaguesModal-top">
          <span className="leaguesModal-top-text">LİG SEÇ</span>
          <BiChevronDown
            color="white"
            className="leagues-icon"
            size="1.5em"
          ></BiChevronDown>
        </div>
        <div className="leaguesModal-content">
          {leagues.map(league=>(
          <div className="leaguesModal-content-item" key={league.leagueId} onClick={()=>{setLeague(league.leagueName); cancel()}}>{league.leagueName} </div>
          ))}
        
          
        </div>

      </div>

    </Modal>
  );
};

export default LeaguesModal;
