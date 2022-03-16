//first code that will be executed in the browser: index.js
import React from 'react';
import ReactDOM from 'react-dom'; // importing objests from libraries - see json dependencies

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root')); //jsx code - html in js. telling browser where to render the element. See in index.html under public. Renders the content in the components.


