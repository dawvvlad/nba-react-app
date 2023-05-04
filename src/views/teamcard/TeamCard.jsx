import { TabInner } from "../../components/tab-inner/TabInner";
import { useContext, useState, useEffect } from "react";
import { TeamContextProvider } from "../../context/teamcontext/TeamContext";
import { Preloader } from "../../components/preloader/Preloader";
import { useParams } from "react-router-dom";
import { getSpecificTeam, getPlayers } from "../../api";


import "./teamcard.css"

export const TeamCard = () => {
    const [ cardState, setCardState ] = useState(`events`)

    const { id } = useParams();
    const { currentTeam, teamLogo, setCurrentTeam, setNextEvent, setDate, setTeamIsLoading, setTeamLogo, setPlayers } = useContext(TeamContextProvider)

    useEffect(() => {
        setTeamIsLoading(true);

        getSpecificTeam(id).then(data => {
            setCurrentTeam(data.team);
            setNextEvent(data.team.nextEvent[0].competitions[0].competitors);
            setTeamLogo(data.team.logos[0].href)
            setDate(Date.parse(`${data.team.nextEvent[0].date}`));
            setTeamIsLoading(false);

        });

        getPlayers().then(data => {  
            setPlayers(data.players.filter(player => `${player.tid}` === `${id}`));
        })
    }, [])

    const setTab = (e) => {
        const target = e.target;

        if(target.tagName !== `H2`) return;

        if(!target.matches(`active-tab`)) {
            const active = document.querySelectorAll(`.active-tab`);
            active.forEach(el => el.classList.remove(`active-tab`));

            const title = document.querySelectorAll(`.active-title`);
            title.forEach(el => el.classList.remove(`active-title`));

            target.parentNode.classList.add(`active-tab`)
            target.classList.add(`active-title`);
            
            setCardState(target.id);

        }
    }
    
    return (
        <>
           { !currentTeam.franchise ? <Preloader /> : <div className="team-card" onClick={setTab}>
                <div className="team-info__item" style={{ background: `linear-gradient(to bottom, #${currentTeam.color}, rgb(29, 29, 29))` }}> 
                    <div className="team-name">
                        <img className="team-logo__item" src={`${teamLogo}`} alt="" />
                        <h1>{currentTeam.displayName}</h1>
                    </div>

                    <div className="venue">
                        <p>{currentTeam.franchise.venue.fullName}, {currentTeam.franchise.venue.address.city}, {currentTeam.franchise.venue.address.state}</p>
                    </div>
                </div>

                <div className="tab-menu">
                    <div className="tab active-tab">
                        <h2 id="events" className="active-title">Event</h2>
                    </div>
                    <div className="tab">
                        <h2 id="roster">Roster</h2>
                    </div>
                </div>
                
                <TabInner cardState={cardState}/>
            </div>}
        </>
    )
}