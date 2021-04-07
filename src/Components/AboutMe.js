import { isMobile } from 'react-device-detect'
import photo from './Images/photo.jpg'
import { DiReact  , DiSass ,DiJavascript} from "react-icons/di";
import { Link } from 'react-router-dom';


function AboutMe(props){
    return(
        <div className={isMobile ? "aboutMe-container mobile-container" : "aboutMe-container"}>
            <div className={props.theme ? "info-container info-container-dark" : "info-container"}>
                {isMobile ? <img className="info-photo" src={photo} alt="profile"/> : null}
                <h1 className="title">{props.currentLanguage === 'english' ? props.text.english.aboutMe.title : props.text.spanish.aboutMe.title}</h1>
                <div className="aboutMe-info">
                    <p>
                        {props.currentLanguage === 'english' ? props.text.english.aboutMe.bio1 : props.text.spanish.aboutMe.bio1}
                        <br/>
                        {props.currentLanguage === 'english' ? props.text.english.aboutMe.bio2 : props.text.spanish.aboutMe.bio2}
                        <br/>
                        <br/>
                        {props.currentLanguage === 'english' ? props.text.english.aboutMe.bio3 : props.text.spanish.aboutMe.bio3}
                        <br/>
                        <br/>
                        {props.currentLanguage === 'english' ? props.text.english.aboutMe.bio4 : props.text.spanish.aboutMe.bio4}
                    </p>
                </div>
                <ul className="stacks">
                    Stack:
                    <li className="stack-item">
                        <DiJavascript className="icon"/> Html,Css,Javascript
                    </li>
                    <li className="stack-item">
                        <DiReact className="icon"/> React
                    </li>
                    <li className="stack-item">
                        <DiSass className="icon"/> Sass
                    </li>
                </ul>
                <ul className="stacks">
                <i className="fas fa-globe-americas icon"></i> {props.currentLanguage === 'english' ? props.text.english.aboutMe.language : props.text.spanish.aboutMe.language}
                    <li className="stack-item"> {props.currentLanguage === 'english' ? props.text.english.aboutMe.spanish : props.text.spanish.aboutMe.spanish} </li>
                    <li className="stack-item"> {props.currentLanguage === 'english' ? props.text.english.aboutMe.english : props.text.spanish.aboutMe.english} </li>
                    <li className="stack-item"> {props.currentLanguage === 'english' ? props.text.english.aboutMe.japanese : props.text.spanish.aboutMe.japanese} </li>
                </ul>
                <h2 className="go-to-info"> <Link to="/projects">{props.currentLanguage === 'english' ? props.text.english.aboutMe.seeProjects : props.text.spanish.aboutMe.seeProjects}  <i className="fas fa-chevron-right"></i></Link> </h2>
                <h2 className="go-to-info"> <Link to="/contact"> {props.currentLanguage === 'english' ? props.text.english.aboutMe.seeContact : props.text.spanish.aboutMe.seeContact} <i className="fas fa-chevron-right"></i> </Link></h2>
            </div>
        </div>
    )
}

export default AboutMe