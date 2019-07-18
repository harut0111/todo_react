/* const firebase = require("firebase");
    // Required for side-effects
    require("firebase/firestore"); */


const firebase = require('firebase/app');
require('firebase/firestore');
 
firebase.initializeApp({
    apiKey: 'AIzaSyA-NlEgvbcRcsOT_ZP1j24kbZTKIsViHA4',
    authDomain: 'todoapp-harut.firebaseapp.com',
    projectId: 'todoapp-harut'
});

export default firebase;