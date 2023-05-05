import { useContext, useEffect } from "react";
import "./tabinner.css"
import { TeamContextProvider } from "../../context/teamcontext/TeamContext";
import { Preloader } from "../preloader/Preloader";
import { Link, useNavigate } from "react-router-dom";

export const TabInner = (props) => {
    const { cardState } = props;
    const { players, nextEvent, date } = useContext(TeamContextProvider)
    
    const currentDate = Date.now();
    const navigate = useNavigate()

    useEffect(() => {
        if(document.querySelector(`.match`)) {
            const scoreBoards = document.querySelectorAll(`.score-board`);
            if(nextEvent[0] && nextEvent[0].score) {
                if(nextEvent[0].score.value > nextEvent[1].score.value) {
                    scoreBoards[0].classList.add(`winner`)
                } else {
                    scoreBoards[1].classList.add(`winner`)
                }
            };
        }
        

        console.log(1);
    })

    return (
        <>
            <div className="card-inner">{ cardState === "roster" ?

                <div className="players">{ players.map(player => {
                    return ( <div className="player-card" key={player.name ? player.name : player.firstName}> 
                                <img className="player-img" src={player.imgURL ? player.imgURL : `./teams/No.png`} alt="player" />
                                <li> {player.firstName ? `${player.firstName} ${player.lastName}` : player.name} </li> 
                                <p>{player.jerseyNumber ? player.jerseyNumber : player.stats[player.stats.length - 1].jerseyNumber}</p>
                                <p>{player.pos}</p>
                            </div>
                    )
                }) }</div> :

                <div className="match">
                    { currentDate > date ? `Last Event` : `Next Event`}
                    <div className="event-name">
                        
                    </div>
                    <div className="date">
                    <p>{`${new Intl.DateTimeFormat('ru-RU').format(date)}`} <span>{`${new Intl.DateTimeFormat('ru-RU', { hour: `2-digit`, minute: `2-digit` }).format(date)}`}</span></p>
                    </div>
                    
                    { !nextEvent[0] ? <Preloader /> : <div className="event-wrapper">
                        <div className="home-away">

                            <div className="home">
                                <h3>home</h3>
                                <img className="team-logo" src={nextEvent[0].team.logos[0].href} alt="" />
                                <h3>{nextEvent[0].team.abbreviation}</h3>
                            </div>

                            <h3 className="scores">
                                <span className="score-board">{ nextEvent[0].score ? nextEvent[0].score.value : `-` }</span> : <span className="score-board">{ nextEvent[1].score ? nextEvent[1].score.value : `-` }</span>
                            </h3>

                            <div className="away">
                                <h3>away</h3>
                                <img className="team-logo" src={nextEvent[1].team.logos[0].href} alt="" />
                                <h3>{nextEvent[1].team.abbreviation}</h3>
                            </div>
                            
                        </div>
                        
                        <div className="btns">
                            <button className="back-btn-team" key="back" onClick={() => navigate(-1)}>back</button>
                            <Link className="main-menu__link a" to="scores">More</Link>
                        </div>
                    </div>}

                </div>

            }</div>
        </>

    )

}