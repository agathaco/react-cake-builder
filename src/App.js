import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Cake from './components/Cake'
import Home from './components/Home';
import Base from './components/Base';
import Filling from './components/Filling';
import Icing from './components/Icing';
import Tiers from './components/Tiers';
import Theme from './components/Theme';
import Result from './components/Result';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cake: {
        base:'',
        filling:'',
        icing: 5,
        tiers: 1,
        theme: ''
      },
    }
  }

  updateCake = (property, option) => {
    console.log('picked option:', option)
    this.setState(prevState => ({
      cake: {
      ...prevState.cake,
      [property]: option
      }
    }));
    //     const updatedCake = {...this.state.cake};
    // updatedCake[property] = option
    // this.setState({cake: updatedCake})
  }

  render() {
    return (
      <div className="app">
        <Cake cake={this.state.cake}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/base" render={(props) => <Base cake={this.state.cake} pickBase={(base) => this.updateCake('base', base)} {...props} /> }/>
          <Route exact path="/filling" render={props => <Filling cake={this.state.cake} pickFilling={(filling) => this.updateCake('filling', filling)} {...props} /> }/>
          <Route exact path="/icing" render={props => <Icing cake={this.state.cake} pickIcing={(icing) => this.updateCake('icing', icing)} {...props} /> }/>
          <Route exact path="/tiers" render={props => <Tiers cake={this.state.cake} pickTiers={(tiers) => this.updateCake('tiers', tiers)} {...props} /> }/>
          <Route exact path="/theme" render={props => <Theme cake={this.state.cake} pickTheme={(theme) => this.updateCake('theme', theme)} {...props} /> }/>
          <Route exact path="/result" render={props => <Result cake={this.state.cake}  {...props} /> }/>
        </Switch>
      </div>
    );
  }
}

export default App;


