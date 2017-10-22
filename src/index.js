import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './components/store'
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);