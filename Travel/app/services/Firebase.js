import * as firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyAjW5yCX-UbgcgkPzLb5cEe-HyhqMEKbBE",
  authDomain: "travel-app-e5444.firebaseapp.com",
  databaseURL: "https://travel-app-e5444.firebaseio.com/",
};

export const firebaseRef = firebase.initializeApp(config);
