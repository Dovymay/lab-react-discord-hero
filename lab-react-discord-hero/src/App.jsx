// src/App.jsx
import './App.css';
import logo from './assets/discord-logo-white.png'
import menu from './assets/menu-icon.png'

function App(){
  return (
    <div className="App">
    <header className="header">
      <img className="logo" src={logo} alt="logo-white" />
      <img className="menu" src={menu} alt="menu-white" />
    </header>

    <section className="hero">
       <div className="hero-text">
          <h1>IMAGINE A PLACE…</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of
            friends can spend time together. A place that makes it easy together
            talk every day and hang out more often.
          </p>
          <div className="buttons">
            <button className="btn-mac">Download for Mac</button>
            <button className="btn-open">Open Discord in your browser</button>
          </div>
        </div>

        <div className="hero-image">
          <img src="./assets/discord-background.png" alt="Discord Hero" />
        </div>
    </section>
    </div>
    );
    }

    export default App;