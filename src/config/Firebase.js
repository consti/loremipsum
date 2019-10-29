import Firebase from 'firebase';

let firebaseConfig = {
    apiKey: "We_Are_Hiring_At_https___jobs_oozou_com",
    authDomain: "loremipsum.firebaseapp.com",
    databaseURL: "https://loremipsum.firebaseio.com",
    projectId: "loremipsum",
    storageBucket: "",
    messagingSenderId: "loremipsum",
    appId: "loremipsum"
};

let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
