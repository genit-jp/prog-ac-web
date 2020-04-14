import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: 'AIzaSyBQNiUrnO12O5NUq2sMhwco6s6mfnnB9l4',
      authDomain: 'prog-ac-web.firebaseapp.com',
      databaseURL: 'https://prog-ac-web.firebaseio.com',
      projectId: 'prog-ac-web',
      storageBucket: 'prog-ac-web.appspot.com',
      messagingSenderId: '545230355378',
      appId: '1:545230355378:web:b25e5fb94c63ee55dd02ab',
      measurementId: 'G-PST0GTL9D3'
    }
  )
}

export default firebase
