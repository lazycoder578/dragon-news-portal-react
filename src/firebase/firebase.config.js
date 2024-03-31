// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2IaW3PdMjuv943cgDDUK_do9zIbsvxqA",
  authDomain: "dragon-news-portal-react.firebaseapp.com",
  projectId: "dragon-news-portal-react",
  storageBucket: "dragon-news-portal-react.appspot.com",
  messagingSenderId: "227072933394",
  appId: "1:227072933394:web:fbf80a4fa4ab521b96e2cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;