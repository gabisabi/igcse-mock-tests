# IGCSE Mock Tests and Notes

Live site: https://gabisabi.github.io/igcse-mock-tests/

Notes, flashcards and quizzes for every Grade 9 class. Content lives in `data/subjects.json` and `data/topics.json`.

## Turning on accounts (one-time, about 5 minutes)

Accounts let each student sign up with an email and username, keep their progress on any device, and let the admin see everyone's progress. Nobody can read another student's data.

1. Go to https://console.firebase.google.com and click **Create a project**. Name it anything (e.g. `igcse-mock-tests`). Google Analytics can be turned off.
2. In the left menu open **Build → Authentication → Get started → Sign-in method** and enable **Email/Password**.
3. Open **Build → Firestore Database → Create database**. Choose **production mode** and any location. Then open the **Rules** tab, delete what is there, paste the whole contents of `firestore.rules` from this repo, and click **Publish**.
4. Click the gear → **Project settings**. Under **Your apps** click the **</>** (web) icon, give it a name, skip hosting, and copy the `firebaseConfig = { ... }` object.
5. Open `firebase-config.js` in this repo, replace `window.FIREBASE_CONFIG = null;` with `window.FIREBASE_CONFIG = { ...the object you copied... };` and commit. (Or paste the object to Claude and it will do this step.)
6. In **Authentication → Settings → Authorized domains**, make sure `gabisabi.github.io` is listed (add it if not).

After that the **Sign in** button in the sidebar becomes live. The admin emails in `firebase-config.js` and `firestore.rules` get a **Students** page.

The config object is safe to publish: Firebase web keys are public by design, and the security rules are what protect the data.
