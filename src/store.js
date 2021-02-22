import React from 'react'
import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import notifyRedusers from './reducers/notifyRedusers'
import settingsRedusers from './reducers/settingsRedusers'



const firebaseConfig = {
  apiKey: "AIzaSyCJtBfKUQ29yGCBShLwX2uiMHvMgWOeBqw",
  authDomain: "react-client-panel-e2bed.firebaseapp.com",
  projectId: "react-client-panel-e2bed",
  storageBucket: "react-client-panel-e2bed.appspot.com",
  messagingSenderId: "120438751985",
  appId: "1:120438751985:web:df586cca7048473f4f5f50",
  measurementId: "G-P13H4XJ2BR"
}

  // react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
}

  // Inin firebse  instance 
  firebase.initializeApp(firebaseConfig);

  // init firestore
  const firestor = firebase.firestore()  
  const settings = {timestampsInSnapshorts:true};
  firestor.settings(settings)



  const createStoreWithFirebase = compose(
    
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
  )(createStore);



  
const rootReducer = combineReducers({
  firebase:firebaseReducer,
  firestore:firestoreReducer,
  notify:notifyRedusers,
  settings:settingsRedusers, 
})

if (localStorage.getItem('settings') == null) {
  // Default settings
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  };

  // Set to localStorage
  localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

// Create initial state
// const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };
const initialState = {}

// reactReduxFirebase(firebase, rrfConfig),

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;