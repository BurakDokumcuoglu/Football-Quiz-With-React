import React from "react";
import Modal from "react-modal";
import leagues from "../../../store/initialValues/leagues";
import { BiChevronDown } from "react-icons/bi";
import "../../../styles/ModalStyles/StartGameModalModalsStyles/chooseLeagueModal.css";

const chooseLeagueModalStyles = {
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

const ChooseLeagueModal = ({
  cancel,
  isChooseLeagueModalVisible,
  setSelectedLeague,
}) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isChooseLeagueModalVisible}
      style={chooseLeagueModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="chooseLeagueModal-container">
        <div className="chooseLeagueModal-top">
          <span className="chooseLeagueModal-top-text">LİG SEÇ</span>
          <BiChevronDown
            color="white"
            className="chooseLeagueModal-icon"
            size="1.5em"
          ></BiChevronDown>
        </div>
        <div className="chooseLeagueModal-content">
          {leagues.map((league) => (
            <div
              className="chooseLeagueModal-content-item"
              key={league.leagueId}
              onClick={() => {
                setSelectedLeague(league.leagueName);
                cancel();
              }}
            >
              {league.leagueName}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ChooseLeagueModal;
