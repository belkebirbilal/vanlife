import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import './Host.css'

export default function Host() {
    return (
        <>
            <nav className="host-nav">
                <Link to=".">dashbord</Link>
                <Link to="income">income</Link>
                <Link to="van">van</Link>
                <Link to="reviews">reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}