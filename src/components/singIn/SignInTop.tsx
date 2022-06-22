import { styled } from "@mui/material/styles";
import useBreakpoint from "use-breakpoint";

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 };

const TitleWrapper = styled("div")`
	text-align: center;
`;

const SignInTitle = styled("h3")`
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	color: #000000;
	margin-top: 0;
`;
const SignInSubTitle = styled("p")`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	color: #848484;
	margin: 24px 0;
`;

const SignInTop = () => {
	const { breakpoint, maxWidth, minWidth } = useBreakpoint(
		BREAKPOINTS,
		"desktop"
	);

	return (
		<TitleWrapper sx={[breakpoint === "mobile" && { marginTop: "64px" }]}>
			<SignInTitle>Вход</SignInTitle>
			<SignInSubTitle>
				Войдите в систему со своими данными, которые вам выдал
				администратор
			</SignInSubTitle>
		</TitleWrapper>
	);
};

export default SignInTop;
