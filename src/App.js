import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
/* import Project from './pages/Project'; */
import ProjectViewerProvider from './context/ProjectViewerContext';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ProjectViewerProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
           {/*  <Route path='/:projectId' exact component={Project} /> */}
          </Switch>
        </Router>
        
      </div>
    </ProjectViewerProvider>
    
  );
}

export default App;
