import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth'

const config= {
        apiKey: "AIzaSyD-SrLIu7v0sRpQx1Tw8t1d1rmvhN43EN0",
        authDomain: "ecommerce-77492.firebaseapp.com",
        databaseURL: "https://ecommerce-77492.firebaseio.com",
        projectId: "ecommerce-77492",
        storageBucket: "ecommerce-77492.appspot.com",
        messagingSenderId: "1094022988415",
        appId: "1:1094022988415:web:fde21f517a8a70bc66754a",
        measurementId: "G-0GKT8V1FQH"
      };


    firebase.initializeApp(config);

    export const auth =firebase.auth();
    export const firestore = firebase.firestore();
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt:"select_account"});
    export const signInWithGoogle=()=>auth.signInWithPopup(provider);

    export default firebase;