import React from 'react';
import Tasks from './../components/Tasks';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container" style={{padding: "10px 15px"}}>
        <Switch>
          <Route exact path="/" component={() => <Tasks />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
