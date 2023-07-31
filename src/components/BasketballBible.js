// Be able to switch season. Move tials around. sort by position, team
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import "../styles/BasketballBible.css";
import {
  bullsLogo,
  cavsLogo,
  bucksLogo,
  seventySixersLogo,
} from "../png/playerImages";
import {
  kareemAbdulJabbar,
  lebronJames,
  michaelJordan,
  wiltChamberlain,
} from "../png/playerImages";

function BasketballBible() {
  const playerProfiles = [
    {
      firstName: "Michael",
      lastName: "Jordan",
      fontColor: 'black',
      bgColor: 'red',
      career: [
        "1984-85",
        "1985-86",
        "1986-87",
        "1987-88",
        "1988-89",
        "1989-90",
        "1990-91",
        "1991-92",
        "1992-93",
        "1993-94",
        "1994-95",
        "1995-96",
        "1996-97",
        "1997-98",
        "1998-99",
        "1999-00",
        "2000-01",
        "2001-02",
        "2002-03",
      ],
      season: "1995-96",
      position: "SG",
      team: bullsLogo,
      logoInfo: "tall",
      scoring: 31.1,
      efficiency: "+3.6",
      playmaking: 5.4,
      defense: 2.8,
      rebounding: 5.6,
      rings: 6,
      fmvps: 6,
      mvps: 5,
      allNba: 10,
      picture: michaelJordan,
      RANK: 1,
      id: 'michaelJordan23',
    },
    {
      firstName: "LeBron",
      lastName: "James",
      fontColor: 'white',
      bgColor: 'maroon',
      career: [
        "1984-85",
        "1985-86",
        "1986-87",
        "1987-88",
        "1988-89",
        "1989-90",
        "1990-91",
        "1991-92",
        "1992-93",
        "1993-94",
        "1994-95",
        "1995-96",
        "1996-97",
        "1997-98",
        "1998-99",
        "1999-00",
        "2000-01",
        "2001-02",
        "2002-03",
      ],
      season: "2012-13",
      position: "SF",
      team: cavsLogo,
      logoInfo: "wide",
      scoring: 27.5,
      efficiency: "+5.8",
      playmaking: 7.4,
      defense: 3.3,
      rebounding: 7.6,
      rings: 4,
      fmvps: 4,
      mvps: 4,
      allNba: 17,
      picture: lebronJames,
      RANK: 2,
      id: 'lebronJames23',
    },
    {
      firstName: "Kareem",
      lastName: "Abdul-Jabbar",
      fontColor: 'white',
      bgColor: 'green',
      career: [
        "1984-85",
        "1985-86",
        "1986-87",
        "1987-88",
        "1988-89",
        "1989-90",
        "1990-91",
        "1991-92",
        "1992-93",
        "1993-94",
        "1994-95",
        "1995-96",
        "1996-97",
        "1997-98",
        "1998-99",
        "1999-00",
        "2000-01",
        "2001-02",
        "2002-03",
      ],
      season: "1971-72",
      position: "C",
      team: bucksLogo,
      logoInfo: "square",
      scoring: 25.5,
      efficiency: "+6.2",
      playmaking: 2.4,
      defense: 4.3,
      rebounding: 10.6,
      rings: 6,
      fmvps: 2,
      mvps: 6,
      allNba: 14,
      picture: kareemAbdulJabbar,
      RANK: 3,
      id: 'kareemAbdulJabbar33',
    },
    {
      firstName: "Wilt",
      lastName: "Chamberlain",
      fontColor: 'white',
      bgColor: 'darkblue',
      career: [
        "1959-60",
        "1960-61",
        "1961-62",
        "1962-63",
        "1963-64",
        "1964-65",
        "1965-66",
        "1966-67",
        "1967-68",
        "1968-69",
        "1969-70",
        "1970-71",
        "1972-72",
        "1973-73",
        "1974-74",
      ],
      season: "1966-67",
      position: "C",
      team: seventySixersLogo,
      logoInfo: "square",
      scoring: 24.5,
      efficiency: "+10.2",
      playmaking: 7.4,
      defense: 4.3,
      rebounding: 18.6,
      rings: 2,
      fmvps: "1*",
      mvps: 4,
      allNba: 12,
      picture: wiltChamberlain,
      RANK: 4,
      id: 'wiltChamberlain13',
    },
  ];

  const [yearSelection, setYearSelection] = useState(null);

  const handleSelect = (option) => {
    setYearSelection(option);
  }

  const content = playerProfiles.map((info) => {    
    const updatedOptions = info.career.map((byYear) => {
      return (
        { label: byYear, value: byYear }
      );
    })
    
    // const options = [
    //   { label: info.season, value: info.season },
    //   { label: info.season, value: info.season },
    //   { label: info.season, value: info.season },
    //   { label: info.season, value: info.season },
    // ]
    
    const lastNameLength = {
      fontSize: info.lastName.length > 10 ? "20px" : "auto",
    };

    const nameStyles = {
      padding: info.lastName.length < 10 ? "5px 25px" : "auto",
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
              <span className="stat-label">Championships: </span>
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
          <div>
            <img
              alt="basketball-player"
              src={info.picture}
              className="image-css"
            />
          </div>
        </div>
        <Dropdown         
          onChange={handleSelect}
          value={yearSelection} 
          options={updatedOptions}
          // key={playerProfiles.id}
          // classNames="dropdown-layout"
        />
      </div>
    );
  });

  return <div className="grid-layout">{content}</div>;
}

export default BasketballBible;
