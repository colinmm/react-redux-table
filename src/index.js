import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import './styles/index.css';
import './styles/fixed-data-table.css';
import './styles/bootstrap-multiselect.css';

import configureStore from './store/configureStore';

const store = configureStore({});

ReactDOM.render(
    <div>
        <Provider store={ store }>            
            <App />                    
        </Provider>    
    </div>,
    document.getElementById('root')
);

