import useBreakpoint from "use-breakpoint";
import { Typography } from "@mui/material";
import { Wrapper } from "../custom/defaultStyles";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const SignUpTop = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<Wrapper
			textAlign="center"
			marginTop={breakpoint === "mobile" ? "64px" : ""}
		>
			<Typography
				fontWeight={700}
				fontSize="24px"
				color="#000000"
				marginTop={0}
			>
				Регистрация
			</Typography>
			<Typography
				fontWeight={400}
				fontSize="14px"
				color="#848484"
				lineHeight="16px"
				margin="24px 0"
			>
				Сделайте регистрацию по Email или Google
			</Typography>
		</Wrapper>
	);
};

export default SignUpTop;
