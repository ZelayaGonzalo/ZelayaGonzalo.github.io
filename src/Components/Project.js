import { motion } from 'framer-motion';
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { IconContext } from "react-icons";
import { DiReact , DiHtml5 , DiSass , DiNodejs , DiMongodb, DiUnitySmall,DiJavascript} from "react-icons/di";
import Pagination from './Pagination'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


function Project(props){
    const [index,setIndex] = useState(0)
    const handleIndex = (index) =>{
    setIndex(index)
    }
    return(
        <motion.div 
        key={props.project.name}
        initial={{ opacity: 0, y:'100vh' }}
        animate={{opacity:1, y:0,transition:{staggerChildren:0.5} }}
        exit={{opacity:0,y:'100%'}}
        className={props.theme ? "project-box project-box-dark" : "project-box"}>
            <h2 className="project-title">{props.project.name}</h2>
            <div className="img-container">
                <AutoPlaySwipeableViews
                    enableMouseEvents
                    index={index}
                    onChangeIndex={handleIndex}
                    >
                    {props.project.images.map(data=> <div key={data} className="portfolio-img"><img src={data} alt="screenshoot"></img></div>)}
                </AutoPlaySwipeableViews>
                <Pagination dots={props.project.images.length} index={index} onChangeIndex={handleIndex} />
            </div>
            <p>{props.project.description}</p>
            <div className="portfolio-stack">
                {props.project.stack.map(data => <IconContext.Provider key={data} value={{className: "react-icons"}  }><div title={data}>{getIcon(data)}</div></IconContext.Provider>)}
            </div>
            <div className="portfolio-buttons">
                <a href={props.project.demo} target="_blank" rel="noopener noreferrer"> Demo</a>
                {props.project.repo ? <a href={props.project.repo} target="_blank" rel="noopener noreferrer"> Repo </a> : null}
            </div>
        </motion.div>
        )
}


function getIcon(stack){
    switch(stack){
        case "react":
            return <DiReact/>
        case "sass":
            return <DiSass/>
        case "express":
            return <DiNodejs/>
        case "mongoDB":
            return <DiMongodb/>
        case "unity":
            return <DiUnitySmall/>
        case "javascript":
            return <DiJavascript/>
        default:
            return <DiHtml5/>
    }
}

export default Project