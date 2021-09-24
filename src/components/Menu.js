import React, { useState } from "react";
import "../styles/menu.css";
import logo from "../images/logo.png";
import { BiChevronDown } from "react-icons/bi";
import SearchModal from "./Modals/SearchModal";
import LeaguesModal from "./Modals/LeaguesModal";
import MinBetModal from "./Modals/MinBetModal";
import MaxBetModal from "./Modals/MaxBetModal";

export default function Menu() {
  const [isSearchModalVisible, setIsSearchModalVisible] = useState(false);
  const [isLeaguesModalVisible, setIsLeaguesModalVisible] = useState(false);
  const [isMinBetModalVisible, setIsMinBetModalVisible] = useState(false);
  const [isMaxBetModalVisible, setIsMaxBetModalVisible] = useState(false);

  const [leagueName, setLeagueName] = useState("TÜMÜ")
  const [searchValue, setSearchValue] = useState("ARAMA")
  const [minBetValue, setMinBetValue] = useState(1)
  const [maxBetValue, setMaxBetValue] = useState(100)

  return (
    <div className="menu">
      <img className="menu-logo" src={logo} alt="logo" />
      <span className="text">OYUNCU</span>
      <div className="menu-item search" onClick={() => setIsSearchModalVisible(true)}>
        <span className="menu-item-text arama-text">{searchValue}</span>
        <span className="menu-item-text arama-text-short">ARA</span>
        <BiChevronDown className="icon" color="gray" size="2em"></BiChevronDown>
      </div>
      <span className="text">LİG</span>
      <div className="menu-item all" onClick={()=>setIsLeaguesModalVisible(true)}>
        <span className="menu-item-text">{leagueName}</span>
        <BiChevronDown className="icon" color="gray" size="2em"></BiChevronDown>
      </div>
      <span className="text">BAHİS</span>
      <div className="menu-item minbet" onClick={()=>setIsMinBetModalVisible(true)}>
        <span className="menu-item-text">{minBetValue}₺</span>
        <BiChevronDown className="icon" color="gray" size="2em"></BiChevronDown>
      </div>
      <span className="text tire">-</span>
      <div className="menu-item maxbet" onClick={()=>setIsMaxBetModalVisible(true)}>
        <span className="menu-item-text">{maxBetValue}₺</span>
        <BiChevronDown className="icon" color="gray" size="2em"></BiChevronDown>
      </div>

      <SearchModal 
      isSearchModalVisible={isSearchModalVisible} 
      cancel={()=> {setIsSearchModalVisible(false)}}
      shouldCloseOnOverlayClick={true}
      onRequestClose={()=>setIsSearchModalVisible(false)}
      setSearchValue={setSearchValue}
      />

      <LeaguesModal 
      isLeaguesModalVisible={isLeaguesModalVisible} 
      cancel={()=> {setIsLeaguesModalVisible(false)}}
      shouldCloseOnOverlayClick={true}
      onRequestClose={()=>setIsLeaguesModalVisible(false)}
      setLeague = {setLeagueName}
      />

      <MinBetModal 
      isMinBetModalVisible={isMinBetModalVisible} 
      cancel={()=> {setIsMinBetModalVisible(false)}}
      shouldCloseOnOverlayClick={true}
      onRequestClose={()=>setIsMinBetModalVisible(false)}
      setMinBetValue = {setMinBetValue}
      />

      <MaxBetModal 
      isMaxBetModalVisible={isMaxBetModalVisible} 
      cancel={()=> {setIsMaxBetModalVisible(false)}}
      shouldCloseOnOverlayClick={true}
      onRequestClose={()=>setIsMaxBetModalVisible(false)}
      setMaxBetValue = {setMaxBetValue}
      />

    </div>
  );
}
