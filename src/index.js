import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// CardList robots={robots}