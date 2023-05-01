import { useContext, useEffect } from "react"
import { getTeamsData } from "../../api.js"
import { MainContext } from "../../context/Context"
import { toggle } from "../../helpers/toggle.js"
import "./teamsviewer.css"

export function TeamsViewer() {
    const { teams, setTeams, isLoading, setIsLoading } = useContext(MainContext)

    useEffect(() => {
        setIsLoading(true);
        getTeamsData().then(data => {
            setTeams(data.data);
            setIsLoading(false);
        })
    }, []);

    return (
        <>
        { isLoading ? <h1>wait...</h1> : 
            <div className="teams-wrapper">
                    <h1 onClick={toggle}>Западная конференция</h1>
                    <div className="west">
                        {teams.filter(team => team.conference === "West").map(team => {
                                    return (
                                            <li>{ team.name }</li>
                                        
                                    )
                                })}
                    </div>
                    <h1 onClick={toggle}>Восточная конференция</h1>
                    <div className="east">
                        {teams.filter(team => team.conference === "East").map(team => {
                                        return (
                                                <li>{ team.name }</li>
                                        )
                                    })}
                    </div>
                    

                    
                </div>
            }
        </>
        
    )
}