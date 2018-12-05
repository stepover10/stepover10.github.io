import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Profile, Work } from 'pages';

export default class App extends Component {
    render() {
        return (
              <Switch>
                  <Route exact path="/" component={Profile} />
                  <Route exact path="/work" component={Work} />
              </Switch>        
        );
    }
}
