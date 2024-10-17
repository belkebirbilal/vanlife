import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div className="error">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/">return to Home</Link>
        </div>
    )
}