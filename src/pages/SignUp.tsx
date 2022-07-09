import SignUpTop from "../components/signUp/SignUpTop";
import SignUpForm from "../components/signUp/SignUpForm";
import SignUpBottom from "../components/signUp/SignUpBottom";
import Container from "@mui/material/Container";
import TopBar from "../components/bar/TopBar";
import useBreakpoint from "use-breakpoint";
import { Wrapper } from "../components/custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const SignIn = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<>
			{breakpoint !== "mobile" && <TopBar />}
			<Container
				maxWidth="xl"
				sx={[
					breakpoint !== "mobile" && {
						height: "calc(100vh - 64px)",
						display: "flex",
						alignItems: "center",
					},
				]}
			>
				<Wrapper margin="0 auto" maxWidth="343px">
					<SignUpTop />
					<SignUpForm />
					<SignUpBottom />
				</Wrapper>
			</Container>
		</>
	);
};

export default SignIn;
