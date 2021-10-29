import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

export const initializeFireBaseAuthentiction = () => {
  initializeApp(firebaseConfig);
};
