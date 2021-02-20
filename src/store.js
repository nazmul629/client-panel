import React from 'react'
import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-qhuPLePHMa5QV4tvZ5ddYg1N9CoQ04Y",
    authDomain: "reactclientpanel-77c3e.firebaseapp.com",
    projectId: "reactclientpanel-77c3e",
    storageBucket: "reactclientpanel-77c3e.appspot.com",
    messagingSenderId: "210340088570",
    appId: "1:210340088570:web:d4d8b0984b9822934a9743",
    measurementId: "G-CWTRDGDGY5"
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
})
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