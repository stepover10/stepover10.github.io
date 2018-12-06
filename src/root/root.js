import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Layout from 'shared/layout';

const Root = () => (
    <HashRouter>
        <Layout />
    </HashRouter>
);

export default Root;
