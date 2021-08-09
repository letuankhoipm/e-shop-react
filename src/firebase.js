import firebase from 'firebase';
// import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

var firebaseConfig = {
    apiKey: "AIzaSyD1wN76HVx8h252ThigDQlh_Y--ybkDuME",
    authDomain: "tieutieu-shop.firebaseapp.com",
    projectId: "tieutieu-shop",
    storageBucket: "tieutieu-shop.appspot.com",
    messagingSenderId: "312702038908",
    appId: "1:312702038908:web:d45a0301c45b8a13df6af9",
    measurementId: "G-L40MMKLXF0"
}

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;

