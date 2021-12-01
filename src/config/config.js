import { initializeApp } from 'firebase/app';
import { getAuth } from '@firebase/auth';
// const firebaseConfig = {
//   apiKey: "AIzaSyChQC1fuTPpiLxq4OI_fTd0hXkrHagqRTE",
//   authDomain: "intern-team.firebaseapp.com",
//   projectId: "intern-team",
//   storageBucket: "intern-team.appspot.com",
//   messagingSenderId: "369547159137",
//   appId: "1:369547159137:web:3d2633164e523010aaac20",
//   measurementId: "G-JHWS9P8G27"
// };
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)

const firebaseConfig = {
  apiKey: "AIzaSyB3frCGegiDDJb0kML9b7BY-4ozp2sVFIE",
  authDomain: "react-app-7cc94.firebaseapp.com",
  databaseURL: "https://react-app-7cc94-default-rtdb.firebaseio.com",
  projectId: "react-app-7cc94",
  storageBucket: "react-app-7cc94.appspot.com",
  messagingSenderId: "749226025082",
  appId: "1:749226025082:web:e30790e2fcc493c4659bc3",
  measurementId: "G-ZPV01G4QFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)