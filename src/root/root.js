import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/app';

const Root = () => (
    <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
);

export default Root;
