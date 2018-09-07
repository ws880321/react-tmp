import ReactDOM from 'react-dom';
import React from 'react';
import RouterBox from './router';
import { Provider } from 'react-redux';
import './static/css/normalize.css';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <RouterBox />
    </Provider>,
    document.getElementById('root')
);
