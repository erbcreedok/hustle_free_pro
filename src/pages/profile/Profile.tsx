import ProfileInfo from "../../components/dashboard/profile/ProfileInfo";
import Results from "../../components/dashboard/profile/Results";
import { Wrapper } from "../../components/custom/defaultStyles";

const Profile = () => {
	return (
		<Wrapper maxWidth="673px" marginBottom="70px">
			<ProfileInfo />
			<Results />
		</Wrapper>
	);
};

export default Profile;
