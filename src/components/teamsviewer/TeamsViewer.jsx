import { toggle1, toggle2 } from "../../helpers/toggle"
import "./teamsviewer.css"
import { TeamLi } from "../teamli/TeamLi.jsx"

export function TeamsViewer(props) {
    const { WEST, EAST } = props
    return (
        <>
            <div className="teams-wrapper">
                <p>teams</p>
                        <h1 onClick={toggle1}>West</h1>
                    <div id="west" className="hidden">
                        {WEST.map(team => {
                            return <TeamLi key={team.id} {...team}/>})}
                    </div>
                    <h1 onClick={toggle2}>East</h1>
                    <div id="east" className="hidden">
                        {EAST.map(team => {
                            return <TeamLi key={team.id} {...team}/>})}
                    </div>                 
                </div>
            
        </>
        
    )
}