import "./pagenotfound.css"
import { Link } from "react-router-dom"

export const PageNotFound = () => {
    return (
        <>
            <div className="not-found">
                <h1 className="not-found__item">Page not found</h1>
                <Link className="not-found__link" to={`/nba-react-app`}>To Home</Link>
            </div>
        </>
    )
}