import { FC, useState, useCallback, useEffect } from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { CustomButton } from "../../components/custom/Button";
import ProfileInfo from "../../components/dashboard/profile/ProfileInfo";
import Results from "../../components/dashboard/profile/Results";

const Wrapper = styled("div")`
	max-width: 673px;
	margin-bottom: 70px;
`;

const Profile = () => {
	return (
		<Wrapper>
			<ProfileInfo />
			<Results />
		</Wrapper>
	);
};

export default Profile;
