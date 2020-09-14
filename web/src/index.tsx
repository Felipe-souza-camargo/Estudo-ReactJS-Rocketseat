import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render( // codigo que injeta uma estrutura html utilizando js
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // div onde o js vai escrever todo html da pagina
);

