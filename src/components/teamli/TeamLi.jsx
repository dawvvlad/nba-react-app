import "./teamli.css"
import { Link } from "react-router-dom"
export const TeamLi = (props) => {
    const { id, displayName } = props
    return(
        <>
            <div key={id} className="team">
                <Link className="team-link" to={`${id}`}>
                    <img className="team-icon" src={`../../teams/${id}.png`} alt="" />
                    <p>{displayName}</p>
                </Link> 
            </div>
            
        </>
    )
}