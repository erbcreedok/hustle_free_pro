import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { SignInFormTextStyles } from "../custom/defaultStyles";
import { Wrapper } from "../custom/defaultStyles";

const SignInBottom = () => {
	return (
		<Wrapper maxWidth="343px" textAlign="center">
			<Link to="privacy">
				<Typography
					sx={[
						SignInFormTextStyles,
						{
							display: "block",
							textAlign: "center",
							textDecorationLine: "underline",
							color: "#2f80ed",
							margin: "24px 0",
						},
					]}
				>
					Политика конфеденциальности
				</Typography>
			</Link>
			<Typography sx={[SignInFormTextStyles, { color: "#848484" }]}>
				Все права защищены © 2021
			</Typography>
		</Wrapper>
	);
};

export default SignInBottom;
