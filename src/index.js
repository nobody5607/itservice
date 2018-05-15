import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Router, browserHistory} from 'react-router';
import routes from './routes';
ReactDOM.render(<Router routes={routes} history={browserHistory}/>, document.getElementById('root'));
registerServiceWorker();
