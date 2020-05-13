import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
	// apiKey: 'AIzaSyBbOO2oJ-uFkUZVOXY3DJxvi6RNmdKUGWs',
	// authDomain: 'lsh-ecommerce.firebaseapp.com',
	// databaseURL: 'https://lsh-ecommerce.firebaseio.com',
	// projectId: 'lsh-ecommerce',
	// storageBucket: 'lsh-ecommerce.appspot.com',
	// messagingSenderId: '577093653080',
	// appId: '1:577093653080:web:f192f67f4a79dba075702d',
	// measurementId: 'G-WE2VRPDTEB'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
