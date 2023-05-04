import "./homepage.css";
import { Link } from "react-router-dom";

export function Homepage() {
    return (
        <>
            <main className="main">
                <div className="main-menu">
                    <h1 className="main-menu__title">you are welcome</h1>
                    <p className="main-menu__text">you can see up-to-date information about teams, matches and squads</p>
                    <div className="main-menu__links">
                        <Link className="main-menu__link" to="teams">see teams and events</Link>
                        <Link className="main-menu__link" to="about">About project</Link>
                    </div>
                </div>
            </main>
        </>
    )
}