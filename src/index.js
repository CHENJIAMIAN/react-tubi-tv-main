import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/App.js';
import 'src/style/main.css';

import { Provider } from 'react-redux';
import configureStore from './redux/store.js';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('content')
);

const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(
            ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(onPerfEntry);
                getFID(onPerfEntry);
                getFCP(onPerfEntry);
                getLCP(onPerfEntry);
                getTTFB(onPerfEntry);
            }
        );
    }
};
// 如果要开始测量应用中的性能，请传递一个函数来记录结果（例如：reportWebVitals（控制台.log））
// 或发送到分析终结点。知道更多： https://bit.ly/CRA-vitals
reportWebVitals();
