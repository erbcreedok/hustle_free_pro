import SignInTop from "../components/singIn/SignInTop";
import SignInForm from "../components/singIn/SignInForm";
import SignInBottom from "../components/singIn/SignInBottom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import TopBar from "../components/bar/TopBar";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const SignInWrapper = styled("div")`
	max-width: 343px;
`;

const SignIn = () => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	);

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
				<SignInWrapper
					sx={{
						margin: "0 auto",
					}}
				>
					<SignInTop />
					<SignInForm />
					<SignInBottom />
				</SignInWrapper>
			</Container>
		</>
	);
};

export default SignIn;
