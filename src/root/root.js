import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hashHistory } from 'react-router'
import App from 'shared/app';

const Root = () => (
    <BrowserRouter history={hashHistory} basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
);

export default Root;
