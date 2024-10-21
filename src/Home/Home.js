import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import "./Home.css"

export default function Home() {
    return (
        <>
            <header>
                <h2><Link to="/">#VANLIFE</Link></h2>
                <nav className="home-nav">
                    <ul>
                        <Link to="/host">Host</Link>
                        <Link to="/about">About</Link>
                        <Link to="/vans">Vans</Link>
                        <Link to="/login">Login</Link>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer>Ⓒ 2022 #VANLIFE</footer>
        </>
    )
}