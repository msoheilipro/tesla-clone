import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB4CSyEf4yzS2qhqowlJxlD6fjKjhfbvvk',
  authDomain: 'tesla-clone-1d0ce.firebaseapp.com',
  databaseURL: 'https://tesla-clone-1d0ce-default-rtdb.firebaseio.com',
  projectId: 'tesla-clone-1d0ce',
  storageBucket: 'tesla-clone-1d0ce.appspot.com',
  messagingSenderId: '431458030865',
  appId: '1:431458030865:web:43d04ffa2928129b5ca8b0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };
