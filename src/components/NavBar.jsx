import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <header>
                <img className='logo' src="/logo.webp" alt="logo" width={46} height={46} />
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <nav>
                    <ul>
                        <li><Link to="/characters">Characters</Link></li>
                        <li><Link to="/locations">Locations</Link></li>
                        <li><Link to="/episodes">Episodes</Link></li>
                    </ul>
                </nav>
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
            </header>
        </>
    );
};

export default NavBar;
