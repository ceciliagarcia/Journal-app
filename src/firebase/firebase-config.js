import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID

};

 /*const  firebaseConfigTesting = {
    apiKey: "AIzaSyCc6n5gWVAjZwnjU3GbY0Z8bvf3Krq--bY",
    authDomain: "firechat2-83d59.firebaseapp.com",
    databaseURL: "https://firechat2-83d59.firebaseio.com",
    projectId: "firechat2-83d59",
    storageBucket: "firechat2-83d59.appspot.com",
    messagingSenderId: "1069691146415",
    appId: "1:1069691146415:web:aa2061a76c2b942e8dc45a",
    measurementId: "G-G2PVV13ZYY"
  };


 if( process.env.NODE_ENV === 'test' ) {
     // testing
    firebase.initializeApp(firebaseConfigTesting);
 } else {
   //dev/prod
 firebase.initializeApp(firebaseConfig);
}*/

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}