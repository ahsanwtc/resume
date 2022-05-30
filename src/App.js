import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import './App.css';

function App() {
  library.add(fab, faCheckSquare, faCoffee);
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">

          <h2>I'm Ahsan J. Butt</h2>
          
          <div className="social-container">
            <a href="https://www.linkedin.com/in/jsancs/" target="_blank" className="App-link" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href="https://github.com/ahsanwtc" target="_blank" className="App-link" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a href="https://twitter.com/jssancs" target="_blank" className="App-link" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="https://medium.com/@jssan" target="_blank" className="App-link" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'medium']} /></a>
          </div>
        </header>
        
        
      </div>
    </React.Fragment>
  );
}

export default App;
