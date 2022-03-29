const Header = () => {
    return (
        <nav>
            <div className="nav-container">
                <a href="https://plantpet.herokuapp.com/"><img src="#" alt="PlantPet Logo" /></a>
            </div>
            <div className="nav-container">
                {/* <div className="nav-hamburger-container">
                    <div className="nav-hamburger bar1"></div>
                    <div className="nav-hamburger bar2"></div>
                    <div className="nav-hamburger bar3"></div>
                </div> */}
                {/* home nav links */}
                {/* <div className="home-notLoggedIn">
                <ul className="nav-links home">
                    <li>Features</li>
                    <li>Community</li>
                    <li>About</li>
                </ul>
                <a href="#" className="login-btn">Login</a>
                <a href="#" className="register-btn">Register</a>
            </div> */}
                {/* user logged in nav links */}
                <ul className="nav-links-list loggedin">
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">My Plants</a></li>
                    <li><a href="#" className="nav-link">Search</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;