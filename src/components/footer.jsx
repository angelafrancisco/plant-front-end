const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-container top">
                    <ul className="footer-links-list">
                        <li><a href="#" className="footer-link">About</a></li>
                        <li><a href="#" className="footer-link">Community</a></li>
                        <li><a href="#" className="footer-link">Support</a></li>
                        <li><a href="#" className="footer-link">Resources</a></li>
                    </ul>
                    <ul className="footer-links-list social">
                        <li>
                            <a href="#" className="footer-link insta"><i className="fa-brands fa-instagram fa-2xl"></i></a>
                        </li>
                        <li>
                            <a href="#" className="footer-link fb"><i className="fa-brands fa-facebook-square fa-2xl"></i></a>
                        </li>
                        <li>
                            <a href="#" className="footer-link email"><i className="fa-solid fa-envelope fa-2xl"></i></a>
                        </li>
                        <li>
                            <a href="#" className="footer-link github"><i className="fa-brands fa-github-square fa-2xl"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-container bottom">
                    <a href="https://plantpet.herokuapp.com/" className="footer-logo"><img src="img/favicon.ico" alt="PlantPet Logo" />PlantPet</a>
                    <p className="footer-text">&#169; PlantPet 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;