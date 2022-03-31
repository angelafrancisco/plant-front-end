import { useState } from 'react';

const Header = () => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    return (
        <nav>
            <div className="nav-container">
                <a href="https://plantpet.herokuapp.com/" className="Logo"><img src="img/favicon.ico" alt="PlantPet Logo" />PlantPet</a>
            </div>
            <div className="nav-container">
                {/* mobile hamburger nav */}
                <div onClick={toggleShowing} className="nav-hamburger-container">
                    <div className="nav-hamburger bar1"></div>
                    <div className="nav-hamburger bar2"></div>
                    <div className="nav-hamburger bar3"></div>
                </div>
                {/* {props.user.isLoggedIn ? */}
                {/* // user logged in nav links */}
                < ul className="nav-links-list isloggedin">
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">My Plants</a></li>
                    <li><a href="#" className="nav-link">Search</a></li>
                    <li><a href="#" className="solid-btn">Logout</a></li>
                </ul>
                {/* :
                    // not logged in nav links */}
                <ul className="nav-links-list guest">
                    <li><a href="#" className="nav-link">Features</a></li>
                    <li><a href="#" className="nav-link">Community</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="outline-btn">Login</a></li>
                    <li><a href="#" className="solid-btn">Register</a></li>
                </ul>
                {/* } */}
            </div>
        </nav >
    )
}

export default Header;