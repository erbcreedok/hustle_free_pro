import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./App.css";

const Activity = lazy(() => import("./pages/activity/Activity"));
const AllCompetitions = lazy(
	() => import("./components/dashboard/activity/competition/AllCompetitions")
);
const SingleCompetition = lazy(
	() =>
		import("./components/dashboard/activity/competition/SingleCompetition")
);
const AllPartners = lazy(
	() => import("./components/dashboard/activity/partners/AllPartners")
);
const SinglePartner = lazy(
	() => import("./components/dashboard/activity/partners/SinglePartner")
);
const Home = lazy(() => import("./pages/home/Home"));
const AllNews = lazy(() => import("./components/dashboard/home/news/AllNews"));
const SingleNews = lazy(
	() => import("./components/dashboard/home/news/SingleNews")
);
const WorkoutPayment = lazy(
	() => import("./components/dashboard/home/WorkoutPayment")
);
const Contacts = lazy(() => import("./components/dashboard/home/Contacts"));
const Timetable = lazy(() => import("./pages/timetable/Timetable"));

const Shop = lazy(() => import("./pages/shop/Shop"));
const SingleProduct = lazy(
	() => import("./components/dashboard/shop/SingleProduct")
);

const Profile = lazy(() => import("./pages/profile/Profile"));
const EditProfile = lazy(
	() => import("./components/dashboard/profile/EditProfile")
);
const AddResult = lazy(
	() => import("./components/dashboard/profile/AddResult")
);

function App() {
	return (
		<Router basename="/">
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<SignIn />} />
						<Route path="privacy" element={<PrivacyPolicy />} />
						<Route path="dashboard" element={<Dashboard />}>
							<Route path="home" element={<Home />} />
							<Route path="home/news" element={<AllNews />} />
							<Route
								path="home/news/:id"
								element={<SingleNews />}
							/>
							<Route
								path="home/payment"
								element={<WorkoutPayment />}
							/>
							<Route
								path="home/contacts"
								element={<Contacts />}
							/>

							<Route path="activity" element={<Activity />} />
							<Route
								path="activity/competitions"
								element={<AllCompetitions />}
							/>
							<Route
								path="activity/competitions/:id"
								element={<SingleCompetition />}
							/>
							<Route
								path="activity/partners"
								element={<AllPartners />}
							/>
							<Route
								path="activity/partners/:id"
								element={<SinglePartner />}
							/>
							<Route path="timetable" element={<Timetable />} />

							<Route path="shop" element={<Shop />} />
							<Route
								path="shop/:id"
								element={<SingleProduct />}
							/>

							<Route path="profile" element={<Profile />} />
							<Route
								path="profile/edit"
								element={<EditProfile />}
							/>
							<Route path="profile/add" element={<AddResult />} />

							<Route index element={<Navigate to="home" />} />
							<Route path="*" element={<h1>404</h1>} />
						</Route>
					</Routes>
				</Suspense>
			</main>
		</Router>
	);
}

export default App;
