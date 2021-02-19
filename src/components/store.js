import {createStore, combineReducers, compose} from 'redux'
import firebase from 'firebase'
import 'firebase/firestore'
import {reactReduxFirebase, firebaseReducer, reduxFirebase} from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA-qhuPLePHMa5QV4tvZ5ddYg1N9CoQ04Y",
    authDomain: "reactclientpanel-77c3e.firebaseapp.com",
    projectId: "reactclientpanel-77c3e",
    storageBucket: "reactclientpanel-77c3e.appspot.com",
    messagingSenderId: "210340088570",
    appId: "1:210340088570:web:d4d8b0984b9822934a9743",
    measurementId: "G-CWTRDGDGY5"
}
//React-redux firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true 
  }

  // Inin firebse  instance 
  firebase.initializeApp(firebaseConfig);

//   const firestor = firebase.firestore()

//Add reacr ReduxFirebase enhacer when making store creator

// const creactStoreWithFirebase = compose(
//     reactReduxFirebase(firebase,rrfConfig),
//     reduxFirestore(firebase)
// )(createStore);

  // Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
  })
  
  
  const initialState = {}

  const  redux_developertools = compose(/*reduxFirebase(firebase),*/ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

  const store = createStore (rootReducer, initialState,redux_developertools)
  //);
  

  export default store