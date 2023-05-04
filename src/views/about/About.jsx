import "./about.css"
import { Link } from "react-router-dom"

export const About = () => {
    return (
        <main className="about">
                <div className="about-menu">
                    <h1 className="about-menu__title">this is my nba-library project</h1>
                    <p className="about-menu__text">you can see my other projects at <a className="github-link" href="https://github.com/dawvvlad">https://github.com/dawvvlad</a></p>

                    <Link className="main-menu__link" to="/">HOME</Link>
                </div>
            </main>
    )
}