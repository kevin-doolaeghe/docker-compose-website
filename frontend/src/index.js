import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import IdeaList from './IdeaList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <IdeaList />,
  document.getElementById('root')
);

serviceWorker.unregister();