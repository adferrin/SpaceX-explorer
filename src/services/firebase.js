import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCh8WR87Hd6wvuVUZ_q_mIRa3-tTLFNn5w",
    authDomain: "spacex-explorer-37001.firebaseapp.com",
    databaseURL: "https://spacex-explorer-37001.firebaseio.com",
    projectId: "spacex-explorer-37001",
    storageBucket: "spacex-explorer-37001.appspot.com",
    messagingSenderId: "1029966680431",
    appId: "1:1029966680431:web:6f5f9fcf03a378a3b3589a"
  };

firebase.initializeApp(firebaseConfig);

// local variables
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


// auth functions
function login() {
    return auth.signInWithPopup(provider);
}
function logout() {
    return auth.signOut();
}
  
// export our auth functions and observer
export { login, logout, auth }