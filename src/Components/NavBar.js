import { BrowserView, MobileView } from 'react-device-detect'
import { Link } from 'react-router-dom'
import photo from './Images/photo.jpg'
import { useLocation } from 'react-router-dom'

function NavBar(props){
    const currentLocation = useLocation().pathname
    console.log(currentLocation)

    const english = props.text.english
    const spanish = props.text.spanish

    return(
        <div className="nav-full-container">
            <BrowserView>
                <nav className={props.theme ? "nav-container nav-container-dark" : "nav-container"}>
                    <div className="select-mode" onClick={props.changeTheme}>{props.theme ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}</div>
                    <ul className="select-language">
                        <li className={props.currentLanguage === 'english' ? "selected": null} id="english" onClick={props.changeLanguage}>English</li>
                        <li className={props.currentLanguage === 'spanish' ? "selected": null} id="spanish" onClick={props.changeLanguage}>Español</li>
                    </ul>
                    <div className="nav-photo-container">
                        <img className="nav-photo" src={photo} alt="Profile"></img>
                        <p className="nav-photo-name">GONZALO ZELAYA</p>
                        <p className="nav-photo-name">{props.currentLanguage === 'english' ? english.tag: spanish.tag}</p>
                    </div>
                    <ul className="nav-links">
                        <li className={currentLocation === '/' ? "nav-link selected" : "nav-link"}>
                            <Link className="nav-text" to='/'>{props.currentLanguage === 'english' ? english.about: spanish.about}</Link>
                        </li>
                        <li className={currentLocation === '/projects' ? "nav-link selected" : "nav-link"}>
                            <Link className="nav-text" to='/projects'>{props.currentLanguage === 'english' ? english.projects: spanish.projects}</Link>
                        </li>
                        <li className={currentLocation === '/contact' ? "nav-link selected" : "nav-link"}>
                            <Link className="nav-text" to="/contact">{props.currentLanguage === 'english' ? english.contact: spanish.contact}</Link>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><a href = "mailto: zelayagonzalo33@gmail.com"><i className="fas fa-envelope"></i></a></li>
                        <li><a href="https://github.com/ZelayaGonzalo"><i className="fab fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/gonzalo-zelaya-724485208/"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://wa.me/543876830491" ><i className="fab fa-whatsapp"></i></a></li>
                    </ul>           
                </nav>
            </BrowserView>
            <MobileView>
                <nav className={props.theme ? "nav-container-mobile nav-container-mobile-dark" : "nav-container-mobile"}>
                    <ul className="nav-mobile-links">
                        <li className="nav-link cog">
                            <i className="fas fa-cog"></i>
                            <div className="nav-hidden">
                            <div className="select-mode" onClick={props.changeTheme}>
                                {props.theme ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                            </div>
                            <ul className="select-language">
                                <li className={props.currentLanguage === 'english' ? "selected": null} id="english" onClick={props.changeLanguage}>English</li>
                                <li className={props.currentLanguage === 'spanish' ? "selected": null} id="spanish" onClick={props.changeLanguage}>Español</li>
                            </ul>
                            <ul className="nav-social">
                                <li><a href = "mailto: zelayagonzalo33@gmail.com"><i className="fas fa-envelope"></i></a></li>
                                <li><a href="https://github.com/ZelayaGonzalo"> <i className="fab fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/gonzalo-zelaya-724485208/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="https://wa.me/543876830491" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                            </ul>
                        </div>
                        </li>
                        <li className={currentLocation === '/' ? "nav-link text selected" : "nav-link text"}><Link className="nav-text" to='/'>{props.currentLanguage === 'english' ? english.about: spanish.about}</Link></li>
                        <li className={currentLocation === '/projects' ? "nav-link text selected" : "nav-link text"}><Link className="nav-text" to='/projects'>{props.currentLanguage === 'english' ? english.projects: spanish.projects}</Link></li>
                        <li className={currentLocation === '/contact' ? "nav-link text selected" : "nav-link text"}><Link className="nav-text" to="/contact">{props.currentLanguage === 'english' ? english.contact: spanish.contact}</Link></li>
                    </ul>
                </nav>
                
            </MobileView>
        </div>
    )
}

export default NavBar