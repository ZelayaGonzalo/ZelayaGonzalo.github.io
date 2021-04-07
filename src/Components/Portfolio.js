import projectData from './Data/Projects'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import Project from './Project';


function Portfolio(props){
    const [projects,setProjects] = useState(projectData.english)
    const [showThis,setShowThis] = useState("1")

    function changeShow(event){
        event.target.parentNode.nextSibling.scrollTo(0,0)
        document.getElementById('root').scrollTo(0,0)
        setShowThis(event.target.id)
    }
    useEffect(()=>{
        window.scrollTo(0, 0);
        console.log('useEffect triggers')
    },[showThis])
    useEffect(()=>{
        if(props.currentLanguage === 'english'){
            setProjects(projectData.english)
        }
        else{
            setProjects(projectData.spanish)
        }
    },[props.currentLanguage])
    return(
        <div className={isMobile ? "portfolio-container mobile-portfolio-container": "portfolio-container"}> 
            <ul className={props.theme ? "projects-nav projects-nav-dark" : "projects-nav"}>
                <li id="1" className={showThis === "1" ? "selected": null} onClick={changeShow}>{props.currentLanguage === 'english' ? props.text.english.tabs.project : props.text.spanish.tabs.project}</li>
                <li id="2" className={showThis === "2" ? "selected": null} onClick={changeShow}>{props.currentLanguage === 'english' ? props.text.english.tabs.small : props.text.spanish.tabs.small}</li>
                <li id="0" className={showThis === "0" ? "selected": null} onClick={changeShow}>{props.currentLanguage === 'english' ? props.text.english.tabs.other : props.text.spanish.tabs.other}</li>
            </ul>
            <div className="projects-container">
                <AnimatePresence exitBeforeEnter>
                    {projects.filter(data=> data.type === showThis)
                    .map(project => <Project key={project.name} project={project} theme={props.theme}/>)}
                </AnimatePresence>
            </div>
        </div>
    )
}


export default Portfolio