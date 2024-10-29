// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
  Auth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvoFijrRv7H4KlO6OikObOPORDh-Q1X18",
  authDomain: "reactnativestudy-6eb93.firebaseapp.com",
  projectId: "reactnativestudy-6eb93",
  storageBucket: "reactnativestudy-6eb93.appspot.com",
  messagingSenderId: "237880761040",
  appId: "1:237880761040:web:c5d97bb3bc3926dfae9cd5",
};

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  } catch (e) {
    throw new Error();
  }
} else {
  app = getApp();
  auth = getAuth(app);
}

export { app, auth };
