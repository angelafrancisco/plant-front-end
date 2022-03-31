const Header = (props) => {
    return (
        <nav>
            <div className="nav-container">
                <a href="https://plantpet.herokuapp.com/"><img src="#" alt="PlantPet Logo" /></a>
            </div>
            <div className="nav-container">
                {/* mobile hamburger nav */}
                <div className="nav-hamburger-container">
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
                </ul>
                {/* :
                    // not logged in nav links */}
                <div className="nav-links-container-guest">
                    <ul className="nav-links-list">
                        <li><a href="#" className="nav-link">Features</a></li>
                        <li><a href="#" className="nav-link">Community</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                    </ul>
                    <a href="#" className="login-btn">Login</a>
                    <a href="#" className="register-btn">Register</a>
                </div>
                {/* } */}
            </div>
        </nav >
    )
}

export default Header;