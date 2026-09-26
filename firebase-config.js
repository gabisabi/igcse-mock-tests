// Firebase web config for the public site. Firebase web API keys are public by design;
// the Firestore security rules (firestore.rules) are what protect the data.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDQdNPyxDeoxBjBFCvm8G4XuJlnGncW7G8",
  authDomain: "igcse-mock-tests-ec711.firebaseapp.com",
  projectId: "igcse-mock-tests-ec711",
  storageBucket: "igcse-mock-tests-ec711.firebasestorage.app",
  messagingSenderId: "950397200459",
  appId: "1:950397200459:web:e683bf6b9432278bfd45ce"
};

// Emails that can open the Students page and see everyone's progress
// (keep in sync with isAdmin() in firestore.rules).
window.ADMIN_EMAILS = ["beka@suada.com", "gabriel.tomashvili@bga.ge", "gabrieltomashvili@gmail.com"];
