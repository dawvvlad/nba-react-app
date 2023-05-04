import "./header.css"
import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <header className="header">
            <img className="logo" src="../../logo.jpg" alt="nba" />

            <div className="nav-panel">
                <nav className="nav">
                    <NavLink to={`/`}>Home</NavLink>
                    <NavLink to={`/teams`}>Teams</NavLink>
                    <NavLink to={`/about`}>About</NavLink>

                </nav>
            </div>
        </header>
    )
}