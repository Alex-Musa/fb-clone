import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAJbOxXP0musnBx_ua_vxMoaSAviTDlcy0",
    authDomain: "facebook-clone-a5377.firebaseapp.com",
    databaseURL: "https://facebook-clone-a5377.firebaseio.com",
    projectId: "facebook-clone-a5377",
    storageBucket: "facebook-clone-a5377.appspot.com",
    messagingSenderId: "729009109767",
    appId: "1:729009109767:web:d7b864df72785b728b23a2",
    measurementId: "G-4KSN149W5S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;