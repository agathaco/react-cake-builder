import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Base from './components/Base';
import Filling from './components/Filling';
import Icing from './components/Icing';
import Tiers from './components/Tiers';
import Theme from './components/Theme';
import Result from './components/Result';

import './App.css';

function App() {
  return (
    <div className="App">
  
      <Switch>
        <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/base">
        <Base />
      </Route>
      <Route exact path="/filling">
        <Filling />
      </Route>
      <Route exact path="/icing">
        <Icing />
      </Route>
      <Route exact path="/tiers">
        <Tiers />
      </Route>
      <Route exact path="/theme">
        <Theme />
      </Route>
      <Route exact path="/result">
        <Result />
      </Route>

    </Switch>
    </div>
  );
}

export default App;


