import * as firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBY0VWCFxDQVO5cZ0t-6UaTsZ_7atONjLI",
    authDomain: "harut0111-todo-react.firebaseapp.com",
    databaseURL: "https://harut0111-todo-react.firebaseio.com",
    projectId: "harut0111-todo-react",
    storageBucket: "harut0111-todo-react.appspot.com",
    messagingSenderId: "542642506968",
    appId: "1:542642506968:web:6dc842d0dbb46c16841bad",
    measurementId: "G-Y2D27HQSC2"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;