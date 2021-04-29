import React from 'react';
import { render } from 'react-dom';
// These css import will be compiled into a single file and injected through the link tag.
import './css/global.scss';
import './fonts/Lato/Lato.css';
/* eslint-disable max-len */
// Importing App after CSS import. This ensures all the CSS from the components come after global and font css
// When it gets compiled into a single file.
import App from './App';

render(<App />, document.getElementById('app'));
