import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAv0LqsF6aNgJzrkvZPuewyngDshzIVzpk",
	authDomain: "hustle-free-d0a24.firebaseapp.com",
	databaseURL: "https://hustle-free-d0a24-default-rtdb.firebaseio.com",
	projectId: "hustle-free-d0a24",
	storageBucket: "hustle-free-d0a24.appspot.com",
	messagingSenderId: "333793137976",
	appId: "1:333793137976:web:ebe697588a9221b9e21dcd",
	measurementId: "G-S09DBL484B",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const user = auth.currentUser;
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(
			collection(db, "hustle-free-users"),
			where("uid", "==", user.uid)
		);
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, "hustle-free-users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logInWithEmailAndPassword = async ({email, password}) => {
	console.log(email, password);
	try {
		await signInWithEmailAndPassword(auth, email, password);
		localStorage.setItem(auth.lastNotifiedUid, JSON.stringify(auth));

	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const registerWithEmailAndPassword = async ({ ...props }) => {
	try {
		const { firstName, lastName, email, password } = props;
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, "hustle-free-users"), {
			uid: user.uid,
			firstName,
			lastName,
			authProvider: "Email/Password",
			email,
		});
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert("Password reset link sent!");
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logOut = () => {
	signOut(auth);
};

export {
	storage,
	auth,
	db,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logOut,
};

export const userIsLogged = user;
// export const userName = user.displayName;
// export const userEmail = user.email;