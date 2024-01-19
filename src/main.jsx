import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxchbUnLPDZ8Mj26mGXJmuxvU_AyiUdp8",
  authDomain: "proyectoreact-5c90b.firebaseapp.com",
  projectId: "proyectoreact-5c90b",
  storageBucket: "proyectoreact-5c90b.appspot.com",
  messagingSenderId: "1019871689017",
  appId: "1:1019871689017:web:0ec9f69971f376281fd0e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
)
