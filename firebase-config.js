// Accounts are powered by Firebase (free plan).
// 1. Create a project at https://console.firebase.google.com
// 2. Authentication → Sign-in method → enable "Email/Password"
// 3. Firestore Database → Create database (production mode) → Rules tab → paste firestore.rules
// 4. Project settings → Your apps → Web app → copy the config object below
// Until this is filled in, the site works without accounts (progress saved in the browser only).

window.FIREBASE_CONFIG = null;
// Example:
// window.FIREBASE_CONFIG = {
//   apiKey: "AIza...",
//   authDomain: "igcse-mock-tests.firebaseapp.com",
//   projectId: "igcse-mock-tests",
//   storageBucket: "igcse-mock-tests.appspot.com",
//   messagingSenderId: "1234567890",
//   appId: "1:1234567890:web:abcdef"
// };

// Emails that can open the Students page and see everyone's progress.
window.ADMIN_EMAILS = ["beka@suada.com", "gabriel.tomashvili@bga.ge"];
