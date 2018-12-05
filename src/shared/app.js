import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Profile, Work } from 'pages';

export default class App extends Component {
    render() {
        return (
            <HashRouter>
              <Switch>
                  <Route exact path="/" component={Profile} />
                  <Route path="/work" component={Work} />
              </Switch>
            </HashRouter>
        );
    }
}
