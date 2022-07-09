import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
import { auth, db, logOut } from "../../firebase/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

export function IsLoggedUser() {
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const fetchUserName = async () => {
		try {
			const q = query(
				collection(db, "users"),
				where("uid", "==", user?.uid)
			);
			const doc = await getDocs(q);
			const data = doc.docs[0].data();
			setName(data.name);
		} catch (err) {
			console.error(err);
			alert("An error occured while fetching user data");
		}
	};
	useEffect(() => {
		fetchUserName();
	}, [user]);
	return (
		<div>
			<div>
				Logged in as
				<div>{name}</div>
				<div>{user?.email}</div>
				<button className="dashboard__btn" onClick={logOut}>
					Logout
				</button>
			</div>
		</div>
	);
}
