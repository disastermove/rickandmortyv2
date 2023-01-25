import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav className="nav">
                <a href="/">
                    <img src="/logo.webp" alt="logo" width={46} height={49} />
                </a>
                <div className="nav-pack">
                    <h1>
                        <a href="/">Characters</a>
                    </h1>
                    <h1>
                        <Link to="/locations">Locations</Link>
                    </h1>
                    <h1>
                        <a href="/">Episodes</a>
                    </h1>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
