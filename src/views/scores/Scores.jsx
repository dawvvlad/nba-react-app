import "./scores.css";
import { TeamContextProvider } from "../../context/teamcontext/TeamContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSpecificTeam } from "../../api";
import { Preloader } from "../../components/preloader/Preloader";
import { toggle1 } from "../../helpers/toggle";

export const Scores = () => {
    const [ scoresIsLoading, setScoresIsLoading ] = useState(false)
    const { nextEvent, setNextEvent } = useContext(TeamContextProvider)
    const navigate = useNavigate()
    const { id } = useParams()
    
    useEffect(() => {
        setScoresIsLoading(true)
        getSpecificTeam(id).then(data => {
            setNextEvent(data.team.nextEvent[0].competitions[0].competitors);
            setScoresIsLoading(false);

            console.log(scoresIsLoading);
        })
    }, [])
   

    return (
        <>
        { !nextEvent[0] ? <Preloader /> :
            <div className="scores-container">
                <button className="back-btn-team" key="back" onClick={() => navigate(-1)}>back</button>
                <div className="scores-wrapper">
                    { nextEvent[0].leaders ? 
                    <div className="best-players">
                        <p>best score</p>
                        <div className="team-score-button" onClick={toggle1}>Best Players</div>
                        <div id="west" className="player-menu">
                            { nextEvent[0].leaders.map(leader => {
                                return <div className="player-menu__item">
                                    <p style={{ color: "rgb(255, 136, 57)" }}>{leader.displayName}</p>
                                    <span style={{ color:"white" }}>-</span>
                                    <p>{leader.leaders ? leader.leaders[0].athlete.displayName + ` (${Math.round(leader.leaders[0].value)})` : `No player`}</p>
                                </div>
                            }) }
                        </div>
                    </div>
                

                    : <h1 style={{ color: `white`, textTransform: `uppercase` }}>the game is not over yet</h1> }

                </div>
                { nextEvent[0].leaders ?
                <div className="quarters">
                    <div className="quarters-table">
                        <p>quarters count</p>
                        <div className="quarters-table__teams">

                            <div className="team1">
                                <img src={nextEvent[0].team.logos[0].href} alt="" />
                                <h1>{nextEvent[0].team.abbreviation}</h1>
                                <p>{nextEvent[0].record[0].displayValue} </p>
                                <p>{nextEvent[0].record[1].displayValue} </p>
                                <p>{nextEvent[0].record[2].displayValue} </p>
                                <p>{nextEvent[0].record[3].displayValue} </p>
                            </div>
                            <div className="team2">
                                <img src={nextEvent[1].team.logos[0].href} alt="" />
                                <h1>{nextEvent[1].team.abbreviation}</h1>
                                <p>{nextEvent[1].record[0].displayValue} </p>
                                <p>{nextEvent[1].record[1].displayValue} </p>
                                <p>{nextEvent[1].record[2].displayValue} </p>
                                <p>{nextEvent[1].record[3].displayValue} </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                : `` }
            </div>}
            
        </>
    )
}