'use strict';

import React from 'react';
import ReactDom from 'react-dom'
import App from './components/App.js';
import { AppContainer } from 'react-hot-loader';

require('./index.html');

const container = document.getElementById('app-container');

ReactDom.render(
    <AppContainer>
        <App/>
    </AppContainer>,
    container
);

if( module.hot) {
    module.hot.accept('./components/App', () => {
        ReactDom.render(
            <AppContainer>
                <App/>
            </AppContainer>,
            container
        );
    });
}