// Be able to switch season. Move tials around. sort by position, team
import { Fragment, useState } from "react";
import Dropdown from "./Dropdown";
import ToggleSwitch from "./ToggleSwitch";
import Button from "./Button";
import { MdChangeCircle } from "react-icons/md";
import "../styles/BasketballBible.css";
import PlayerProfiles from "./PlayerProfiles";

function BasketballBible() {
  const [yearSelection, setYearSelection] = useState(null);
  const [otherStats, setOtherStats] = useState(false);
  const [regularSeason, setRegularSeason] = useState(true);
  const [firstImage, setFirstImage] = useState(true);

  const handleSelect = (option) => {
    setYearSelection(option);
  };

  const handleClick = () => {
    setOtherStats(!otherStats);
    setRegularSeason(!regularSeason);
  };

  const dropDownStylez = {
    width: '50px',
  }

  const regSeasonOrPlayoffs = regularSeason ? "Regular Season" : "Playoffs";

  const content = PlayerProfiles.map((info) => {
    const updatedOptions = info.career.map((byYear) => {
      return { label: byYear, value: byYear };
    });

    const handleImageChange = () => {
      setFirstImage(!firstImage);
    };

    const imgSelection = firstImage ? info.picture : info.picture2;

    const lastNameLength = {
      fontSize: info.lastName.length > 8 ? "20px" : "auto",
    };

    const nameStyles = {
      padding: info.lastName.length < 7 ? "5px 15px" : "auto",
      color: info.fontColor,
      backgroundColor: info.bgColor,
    };

    const logoStyle = {
      width:
        info.logoInfo === "tall"
          ? "27.5px"
          : info.logoInfo === "square"
          ? "30px"
          : "auto",
      height: info.logoInfo === "wide" ? "22.5px" : "auto",
    };

    return (
      <div className="card-wrapper">
        <div className="player-info">
          <div className="rank">{info.RANK}</div>
          <div className="name-styling" style={nameStyles}>
            <div className="firstName">{info.firstName}</div>
            <div className="lastName" style={lastNameLength}>
              {info.lastName}
            </div>
          </div>
          <div className="info-wrapper">
            <div className="position-styling">{info.position}</div>
            <img
              src={info.team}
              alt="logo"
              className="logo-style"
              style={logoStyle}
            />
            <div className="season-styling">{info.season}</div>
          </div>
        </div>
        <div className="card-container">
          {!otherStats && (
            <div className="stats-container">
              <div className="stat">
                <span className="stat-label">Pts/75: </span>
                {info.scoring}
              </div>
              <div className="stat">
                <span className="stat-label">rTS%: </span>
                {info.efficiency}
              </div>
              <div className="stat">
                <span className="stat-label">Ast/75: </span>
                {info.playmaking}
              </div>
              <div className="stat">
                <span className="stat-label">Reb/75: </span>
                {info.rebounding}
              </div>
              <div className="stat">
                <span className="stat-label">Stocks/75: </span>
                {info.defense}
              </div>
              <div className="stat">
                <span className="stat-label">Rings: </span>
                {info.rings}
              </div>
              <div className="stat">
                <span className="stat-label">Finals MVPs: </span>
                {info.fmvps}
              </div>
              <div className="stat">
                <span className="stat-label">MVPs: </span>
                {info.mvps}
              </div>
              <div className="stat">
                <span className="stat-label">All-NBA: </span>
                {info.allNba}
              </div>
            </div>
          )}
          {otherStats && (
            <div className="stats-container">
              <div className="stat">
                <span className="stat-label">Pts/75: </span>
                {info.scoring * 2}
              </div>
              <div className="stat">
                <span className="stat-label">rTS%: </span>
                {info.efficiency * 2}
              </div>
              <div className="stat">
                <span className="stat-label">Ast/75: </span>
                {info.playmaking * 2}
              </div>
              <div className="stat">
                <span className="stat-label">Reb/75: </span>
                {info.rebounding * 2}
              </div>
              <div className="stat">
                <span className="stat-label">Stocks/75: </span>
                {info.defense * 2}
              </div>
              <div className="stat">
                <span className="stat-label">Rings: </span>
                {info.rings * 2}
              </div>
              <div className="stat">
                <span className="stat-label">Finals MVPs: </span>
                {info.fmvps * 2}
              </div>
              <div className="stat">
                <span className="stat-label">MVPs: </span>
                {info.mvps * 2}
              </div>
              <div className="stat">
                <span className="stat-label">All-NBA: </span>
                {info.allNba * 2}
              </div>
            </div>
          )}
          <button className="changeImage" onClick={handleImageChange}>
            <MdChangeCircle className="changePic" />
          </button>
          <div>
            <img
              alt="basketball-player"
              src={imgSelection}
              className="image-css"
            />
          </div>
        </div>
        <Dropdown
          onChange={handleSelect}
          value={yearSelection}
          options={updatedOptions}
          // key={info.id}
          // classNames="dropdown-layout"
          styles={dropDownStylez}
        />
        <div className="switchThingy">
          <Fragment>
            <Button className="buttonStyleShit" onClick={handleClick}>
              {regSeasonOrPlayoffs}
            </Button>
            <ToggleSwitch onClick={handleClick} label=" " />
          </Fragment>
        </div>
      </div>
    );
  });

  return <div className="grid-layout">{content}</div>;
}

export default BasketballBible;
