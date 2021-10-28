import React, {useContext} from 'react';
import {render} from 'react-dom';
import App from './App'
import 'normalize.css'
import {GlobalStyles} from './global-styles'
import { firebase } from './lib/firebase.prod';
import { FirebaseContext} from './context/firebase';
render(
  <FirebaseContext.Provider value={{firebase}}>
  <React.StrictMode>
    <GlobalStyles/><App />
  </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
