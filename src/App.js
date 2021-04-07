import './App.css';
import './Components/aboutMe.css'
import './Components/portfolio.css'
import NavBar from './Components/NavBar'
import Portfolio from './Components/Portfolio'
import languages from './Components/Data/Languages'
import { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import './Components/darkTheme.css'
import ScrollToTop from './Components/ScrollToTop';


function App() {
  const [language,setLanguage] = useState("spanish")
  const [darkTheme,setDarkTheme] = useState(true)
  const languagesData = languages
  
  function changeLanguage(event){
    setLanguage(event.target.id)
  }

  function changeTheme(){
    setDarkTheme(!darkTheme)
  }

  return (
    <Router basemname={`/${process.env.PUBLIC_URL}`}>
      <div className={darkTheme ? "App darkBackground" :"App"}>
          <NavBar currentLanguage={language} text={languagesData} changeLanguage={changeLanguage} theme={darkTheme} changeTheme={changeTheme}/>
          <Switch>
            <Route path='/projects'><ScrollToTop/><Portfolio currentLanguage={language} text={languagesData} theme={darkTheme}/></Route>
            <Route path='/contact'><ScrollToTop/> <Contact currentLanguage={language} text={languagesData} theme={darkTheme}/> </Route>
            <Route path='/'><ScrollToTop/> <AboutMe currentLanguage={language} text={languagesData} theme={darkTheme}/> </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
