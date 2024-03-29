// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyADmIbGITCEi5rMYHhDJ1nQbvk0Etsigks",
  authDomain: "streamsmart-cb240.firebaseapp.com",
  projectId: "streamsmart-cb240",
  storageBucket: "streamsmart-cb240.appspot.com",
  messagingSenderId: "987441883887",
  appId: "1:987441883887:web:707b4668b2d8ca4899891a",
  measurementId: "G-0BYHLKTWFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();