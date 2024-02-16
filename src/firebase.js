// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_fb_api_key,
  authDomain: import.meta.env.VITE_auth_domain,
  projectId: import.meta.env.VITE_fb_project_id,
  storageBucket: import.meta.env.VITE_storage_bucket,
  messagingSenderId: import.meta.env.VITE_messaging_sender_id,
  appId: import.meta.env.VITE_app_id,
  measurementId: import.meta.env.VITE_measurement_id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app