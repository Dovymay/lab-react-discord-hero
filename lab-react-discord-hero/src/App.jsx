// src/App.jsx
import './App.css';
import logo from './assets/discord-logo-white.png'
import menu from './assets/menu-icon.png'
import friends from './assets/discord-background.png'

function App() {
  return (
    <>
    <div className="App">
    <img className="logo" src={logo} alt="logo-white" />
    <img className="menu" src={menu} alt="menu-white" />
    </div> 
    <h1>IMAGINE A 
    <br />
    PLACE...
    </h1>
    <p>...where you can belong to a school club, a gaming group, or a
    <br />
    worldwide art community. Where just you and a handful of
    <br />
    friends can spend time together. A place that makes it easy together
    <br />
    talk every day and hang out more often.
    </p>
    <button className='Mac'>Download for Mac</button>
    <br/>
    <button className='Open'>Open Discord in your browser</button>
    <img className="friends" src={friends} alt="menu-white" />
    </>

  );
}

export default App;
