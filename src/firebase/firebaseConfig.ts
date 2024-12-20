import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase } from "firebase/database";
//import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const storage = getStorage(app);

const auth = getAuth(app);

//DB emulator for tests
/*if (location.hostname === "localhost") {
	// Point to the RTDB emulator running on localhost.
	connectDatabaseEmulator(
		database,
		"localhost",
		9000
	);
	/*connectAuthEmulator(
		auth,
		"http://localhost:9099"
	);

	connectStorageEmulator(
		storage,
		"localhost",
		9199
	);
	console.log(
		"test database",
		JSON.stringify(database)
	);

}*/

//export { app, auth, database, storage };
export { app, auth, database};
