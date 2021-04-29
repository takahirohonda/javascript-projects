import React from 'react';
import Header from './components/Header';

// These css import will be compiled into a single file and injected through the link tag.
import './css/global'; 
import './fonts/Lato/Lato.css';

const App = () => (
  <Header>Hello World</Header>
);

export default App;
