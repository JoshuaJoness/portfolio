import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
import Cursor from './components/cursor/cursor.tsx';
import './index.scss';

ReactDOM.render(
  <Routes>
    <Cursor />
  </Routes>, document.getElementById('root'),
);
