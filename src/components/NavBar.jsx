import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <header>
                <img className='logo' src="/logo.webp" alt="logo" width={46} height={49} />
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <nav>
                    <ul>
                        <li><a href="/">Characters</a></li>
                        <li><Link to="/locations">Locations</Link></li>
                        <li><a href="/">Episodes</a></li>
                    </ul>
                </nav>
                <label for="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
            </header>
        </>
    );
};

export default NavBar;
