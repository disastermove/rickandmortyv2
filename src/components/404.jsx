import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container-notfound">
            <h1 className="container-text-notfound">Oops! You seem to be lost.</h1>
            <p className="container-notfound-text">Here are some helpful links:</p>
            <Link to='/' className="link-notfound">Home</Link>
        </div>
    )
}