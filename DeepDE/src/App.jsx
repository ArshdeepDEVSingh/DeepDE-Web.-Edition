import { useEffect, useState } from "react";
import './App.css';
import './App.js'

import YT from './apps/yt.jsx';
import SystemMonitor from "./utils/performance.jsx";
import Clock from "./utils/Clock.jsx"

function App() {
  const [showYT, setShowYT] = useState(false);
  const [showPerf, setShowPerf] = useState(false);
  const [showClock, setShowClock] = useState(false);
  
  return (
    <>
      <div id='body'>
        <div id="dock" className="dock">
          <button id="app1" className="app" onClick={() => setShowYT(true)}>⫸</button>
          <button id="app2" className="app"></button>
          <button id="app3" className="app"></button>
          <button id="app4" className="app"></button>
          <button id="allpp" className="app">≡</button>
        </div>

        <article id="desktop" className="desktop">
          <section id="fs" className="fs">
            {showYT && <YT />}
            {showPerf && <SystemMonitor />}
            {showClock && <Clock />}
          </section>
          <section id="allapps" className="allapps"></section>
        </article>
        
        <div id="menuBar" className="menuBar">
          <a id="Clock" className="mbWidget"  onClick={() => setShowClock(true)}></a>
          <a id="widget2" className="mbWidget">Weather</a>
           <div className="dropup mbWidget">
            <button className="dropbtn">≡</button>
            <div className="dropup-content">
              <button className="duBtns">Task Manager</button>
              <button className="duBtns" onClick={() => setShowPerf(true)}>Performance</button>
              <button className="duBtns">Personalization</button>
              <button className="duBtns">Sounds</button>
              <button className="duBtns">Settings</button>
              <button className="duBtns">Credits</button>
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
