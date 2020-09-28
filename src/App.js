import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
/* import Project from './pages/Project'; */
import ProjectViewerProvider from './context/ProjectViewerContext';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ProjectViewerProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
           {/*  <Route path='/:projectId' exact component={Project} /> */}
          </Switch>
        </Router>
      </div>
    </ProjectViewerProvider>

  );
}

export default App;
