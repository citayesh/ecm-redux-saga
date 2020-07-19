import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth'

const config=  {
    apiKey: "AIzaSyD-SrLIu7v0sRpQx1Tw8t1d1rmvhN43EN0",
    authDomain: "ecommerce-77492.firebaseapp.com",
    databaseURL: "https://ecommerce-77492.firebaseio.com",
    projectId: "ecommerce-77492",
    storageBucket: "ecommerce-77492.appspot.com",
    messagingSenderId: "1094022988415",
    appId: "1:1094022988415:web:fde21f517a8a70bc66754a",
    measurementId: "G-0GKT8V1FQH"
  };
    export const createUserProfileDocument=async (userAuth, additionalData)=>{
        if(!userAuth) return;
       const userRef= firestore.doc(`users/${userAuth.uid}`);
       const snapShot= await userRef.get();
        if (!snapShot.exists){
            const {displayName,email}=userAuth;
            const createdAt=new Date();
        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
                })
            }catch(error){
                console.log(error.message)
            }
        }
        return userRef;
    }

    firebase.initializeApp(config);

    
    export const getCurrentUser = () => {
        return new Promise((resolve, reject) => {
          const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
          }, reject);
        });
      };

    export const auth =firebase.auth();
    export const firestore = firebase.firestore();
    
    
    export const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.setCustomParameters({prompt:"select_account"});
    export const signInWithGoogle=()=>auth.signInWithPopup(googleProvider);

    export default firebase;