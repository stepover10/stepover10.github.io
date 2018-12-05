import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Profile, Work } from 'pages';

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Profile} />
                <Route path="/work" component={Work} />
            </div>
        );
    }
}
