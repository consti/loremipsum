import Firebase from 'firebase';

let firebaseConfig = {
    apiKey: "ComeWorkWithUsAt:https://jobs.oozou.com",
    authDomain: "loremipsum.firebaseapp.com",
    databaseURL: "https://loremipsum.firebaseio.com",
    projectId: "loremipsum",
    storageBucket: "",
    messagingSenderId: "loremipsum",
    appId: "loremipsum"
};

let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
