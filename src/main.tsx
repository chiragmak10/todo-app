import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { globalTheme } from './global/ThemeProvider';
import { App } from './views/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Global styles={globalTheme} />
    <App />
  </React.Fragment>,
);
