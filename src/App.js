import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <menu className="App-menu">
            <a
                className="beaverhacks-title"
                href="http://beaverhacks.now.sh"
            >OSU Hackathon Club</a>
        </menu>
      <header>Timeline bar will be around here</header>
      <div className="team-announcement">

        <p>
          Create your team's custom timers and tasks.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Team Timers
        </a>
      </div>
    </div>
  );
}

export default App;
