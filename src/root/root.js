import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from 'shared/app';

const Root = () => (
    <HashRouter>
        <App />
    </HashRouter>
);

export default Root;
