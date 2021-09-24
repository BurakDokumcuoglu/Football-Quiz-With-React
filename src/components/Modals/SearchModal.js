import React from "react";
import Modal from "react-modal";
import "../../styles/ModalStyles/searchModal.css";
import { BsSearch } from "react-icons/bs";

const searchModalStyles = {
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

const SearchModal = ({ cancel, isSearchModalVisible, setSearchValue }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isSearchModalVisible}
      style={searchModalStyles}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
      onRequestClose={cancel}
    >
      <div className="searchModal-container">
        <div className="searchModal-top">
          <span className="searchModal-top-text">ARAMA</span>
          <BsSearch color="white" className="search-icon"></BsSearch>
        </div>

        <div className="searchModal-content">
          <input
            className="form-control searchModal-input"
            type="text"
            aria-label="default input example"
            onChange={e => setSearchValue(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-warning btn-lg searchModal-searchbtn"
            onClick={cancel}
          >
            ARA
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
